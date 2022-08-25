import os
from flask import (
    Flask,
    render_template, 
    redirect, 
    jsonify, 
    request)
    
#from flask_pymongo import PyMongo
import new_wine_predictor

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
# app.config["MONGO_URI"] = "mongodb://localhost:27017/internetspeeds"
# mongo = PyMongo(app)

from flask_sqlalchemy import SQLAlchemy

uri = os.getenv("DATABASE_URL","")
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://","postgresql://",1)
app.config['SQLALCHEMY_DATABASE_URI'] = uri or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .models import Wine

@app.route("/")
def index():
    #scrape_data.scrape_info()
    #internet_data = mongo.db.countryspeed.find_one()
    return render_template("predict_new_wine.html")

@app.route("/predict_new_wine")
def predict_new_wine():
    new_wine_predictor
    return render_template("predict_new_wine.html")

# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        fixed_acidity = request.form["fixed_acidity"]
        volatile_acidity = request.form["volatile_acidity"]
        citric_acid = request.form["citric_acid"]
        residual_sugar = request.form["residual_sugar"]
        chlorides = request.form["chlorides"]
        free_sulfur_dioxide = request.form["free_sulfur_dioxide"]
        total_sulfur_dioxide = request.form["total_sulfur_dioxide"]
        density = request.form["density"]
        pH = request.form["pH"]
        sulphates = request.form["sulphates"]
        alcohol = request.form["alcohol"]
        

        wine = Wine(fixed_acidity=fixed_acidity, volatile_acidity=volatile_acidity, citric_acid=citric_acid, residual_sugar=residual_sugar, chlorides=chlorides, free_sulfur_dioxide=free_sulfur_dioxide, total_sulfur_dioxide=total_sulfur_dioxide, density=density, pH=pH, sulphates=sulphates, alcohol=alcohol)
        db.session.add(wine)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("predict_new_wine.html")


@app.route("/api/wine")
def wine():
    results = db.session.query(Wine.fixed_acidity, Wine.volatile_acidity, Wine.citric_acid, Wine.residual_sugar, Wine.chlorides, Wine.free_sulfur_dioxide, Wine.total_sulfur_dioxide, Wine.density, Wine.pH, Wine.sulphates, Wine.alcohol).all()

    fixed_acidity = [result[0] for result in results]
    volatile_acidity = [result[1] for result in results]
    citric_acid = [result[2] for result in results]
    residual_sugar = [result[3] for result in results]
    chlorides = [result[4] for result in results]
    free_sulfur_dioxide = [result[5] for result in results]
    total_sulfur_dioxide = [result[6] for result in results]
    density = [result[7] for result in results]
    pH = [result[8] for result in results]
    sulphates = [result[9] for result in results]
    alcohol = [result[10] for result in results]

    wine_data = [{
        "fixed_acidity": fixed_acidity,
        "volatile_acidity": volatile_acidity,
        "citric_acid": citric_acid,
        "residual_sugar": residual_sugar,
        "chlorides": chlorides,
        "free_sulfur_dioxide": free_sulfur_dioxide,
        "total_sulfur_dioxide": total_sulfur_dioxide,
        "density": density,
        "pH": pH,
        "sulphates": sulphates,
        "alcohol": alcohol
    }]

    return jsonify(wine_data)

# @app.route("/map_cbs")
# def map_cbs():
#     return render_template("world_map_cbs.html")

# @app.route("/barchart")
# def barchart():
#     return render_template("barchart.html")

# @app.route("/scatterplot")
# def scatterplot():
#     return render_template("scatter_plot.html")


if __name__ == "__main__":
    app.run(debug=True)

