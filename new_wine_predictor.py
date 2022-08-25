# Wine Quality Machine Learning Prediction Model

import joblib
import pandas as pd

# Import the saved wine prediction model we created earlier

new_wine_predictor=joblib.load( 'finalproject_wine.sav')
new_X_scaler=joblib.load('xscaler.sav')
new_wine_df = pd.read_csv('static/data/new_wine.csv')
new_wine_df.head()
new_y=new_X_scaler.transform(new_wine_df)
new_wine_predictor.predict(new_y)
print(f'Your new wine quality is predicted to score a {new_wine_predictor.predict(new_y)}')



