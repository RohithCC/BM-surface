from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from datetime import datetime


app = Flask(__name__)
CORS(app)
app.secret_key = 'many random bytes'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'BMDB'

mysql = MySQL(app)



@app.route('/list')
def Index():
    cur = mysql.connection.cursor()
    cur.execute("SELECT  * FROM blog")
    data = cur.fetchall()
    return jsonify(data)




@app.route('/insert', methods = ['POST'])
def insert():

    if request.method == "POST":
        flash("Data Inserted Successfully")
        name = request.json['name']
        description = request.json['description']
        url = request.json['url']
       # date = date.today()
        now = datetime.now()
        date = now.strftime('%Y-%m-%d %H:%M:%S')
        cur = mysql.connection.cursor()
        response = cur.execute("INSERT INTO blog (name, description, url, date) VALUES (%s, %s, %s, %s)", (name, description, url, date))
        mysql.connection.commit()
        return jsonify(response)




@app.route('/delete/<string:id_data>', methods = ['GET'])
def delete(id_data):
    flash("Record Has Been Deleted Successfully")
    cur = mysql.connection.cursor()
    deletereponse = cur.execute("DELETE FROM blog WHERE id=%s", (id_data,))
    mysql.connection.commit()
    return jsonify(deletereponse)



@app.route('/get/<string:id_data>', methods = ['GET'])
def GET(id_data):
    flash("get by ID")
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM blog WHERE id=%s", (id_data,))
    mysql.connection.commit()
    data = cur.fetchone()
    return jsonify(data)
    


@app.route('/update',methods=['PUT'])
def update():

    if request.method == 'PUT':
        id_data = request.json['id']
        name = request.json['name']
        description = request.json['description']
        url = request.json['url']
        cur = mysql.connection.cursor()
        updatedresponse = cur.execute("""
               UPDATE blog
               SET name=%s, description=%s, url=%s
               WHERE id=%s
            """, (name, description, url, id_data))
        flash("Data Updated Successfully")
        mysql.connection.commit()
        return jsonify(updatedresponse)









if __name__ == "__main__":
    app.run(debug=True)
