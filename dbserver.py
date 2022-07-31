import base64
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import sqlite3 as sql
import logging
from flask_cors import CORS, cross_origin
import hashlib
from datetime import date
import re

# logger
logging.basicConfig(filename="api.log", level=logging.CRITICAL)


# Flask app and Flask Restful api
app = Flask(__name__)
app.logger.debug("\n\n\n\t\tFlask app start")
api = Api(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


# mock database created with sqlite3
with sql.connect('mydb') as con:
    cur = con.cursor()
    cur.execute("""
                CREATE TABLE if not exists Posts (
                    id integer primary key autoincrement,
                    author text not null,
                    date_posted Date,
                    message text not null,
                    photos blob,
                    interests blob,
                    type text);
                """)
    cur.execute("""
                CREATE TABLE if not exists Profile (
                    id integer primary key autoincrement,
                    name text not null,
                    birth_date Date,
                    country text not null,
                    photo blob);
                """)
    cur.close()


# get all posts in the database
# debug material
@app.route("/")
@cross_origin()
def index():

    # database call
    app.logger.debug("-- Begin -- Database call in index")
    try:
        with sql.connect('mydb') as con:
            cur = con.cursor()
            # SELECT * FROM <Table of Posts>
            cur.execute("SELECT * FROM Posts")
            result = cur.fetchall()
            cur.close()
            # in case we dont get any results
            if result == []:
                # debug
                app.logger.debug(f"{result}")
                return jsonify({"error": "result is empty"})
            app.logger.debug(f"Successful query")
    # in case we get an unexpected error
    except KeyError as k:
        app.logger.debug(f"Error: {k}")
        return jsonify({"error": k})

    app.logger.debug("-- End -- Database call in index")

    # return the results
    return jsonify(result)


# Class generalization for the CRUD methods related to the photo -> database connection
class Post(Resource):

    # GET method
    def get(self, method):
        # curl http://localhost:5000/image/<id> -X GET

        # database call
        app.logger.debug("-- Begin -- Database call")
        try:
            with sql.connect('mydb') as con:
                cur = con.cursor()

                if method == "all":
                    app.logger.debug("Get all posts request")
                    cur.execute("SELECT * FROM Posts")
                elif method == "date":
                    app.logger.debug("Get all posts request from the date")
                    cur.execute("SELECT * FROM Posts ORDER BY id DESC LIMIT 3")
                elif method in ["Reflections", "Business"]:
                    app.logger.debug("Get all posts request from type")
                    cur.execute("SELECT * FROM Posts WHERE type = ?", (method,))
                elif method == "photo":
                    app.logger.debug("Get all posts request from type")
                    cur.execute("SELECT photos FROM Posts")

                result = cur.fetchall()
                cur.close()
                # in case we dont get any results
                if result == []:
                    # debug
                    app.logger.debug(f"{result}")
                    return jsonify({"command": "get_posts", "error": "result is empty"})

                app.logger.debug(f"Successful query")
        # in case we get an unexpected error
        except KeyError as k:
            app.logger.debug(f"Error: {k}")
            return jsonify({"command": "get_posts", "error": k})

        app.logger.debug("-- End -- Database call")

        # return identification and photo
        return jsonify({"command": "get_posts", "posts": result})

    # POST method
    def post(self, method):

        # get the photo
        photos = request.form["photos"]
        author = request.form["author"]
        date_posted = date.today().strftime("%Y/%m/%d")
        message = request.form["message"]
        interests = request.form["interests"]
        type = request.form["type"]

        # database call
        app.logger.debug("-- Begin -- Database call while updating old photo")
        try :
            with sql.connect('mydb') as con:
                cur = con.cursor()
                # UPDATE <Table of Users> SET <photo> = <inputed photo> WHERE <identification> = <inputed identification>
                cur.execute("INSERT INTO Posts(author, date_posted, message, photos, interests, type) VALUES(?,?,?,?,?,?)", (author, date_posted, message, photos, interests, type))
                con.commit()
                cur.close()
                app.logger.debug(f"Successful query")
        # in case we get an unexpected error
        except KeyError as k:
            app.logger.debug(f"Error: {k}")
            return jsonify({"command": "post_posts", "error": k})

        app.logger.debug("-- End -- Database call while updating old photo")

        # return identification and photo
        return jsonify({"command": "post_posts", "successful": "true"})


# add Image class to the url so the methods from Image class can get called
# <method> -> identification for the methods
# method -> filter by -> interests / date / type
api.add_resource(Post, '/posts/<method>')

# main
if __name__ == "__main__":
    # run Flask app
    app.run(debug=True,host="0.0.0.0", port=5000)


    app.logger.info( flask.request.remote_addr)

""" References
- https://flask-restful.readthedocs.io/en/latest/quickstart.html#resourceful-routing
- https://kafka-python.readthedocs.io/en/master/
-
"""