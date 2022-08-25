Chosen topic : Machine Learning to predict quality of white wine.

1. Data   From UCI : get dataset on white wine in csv format.

2. Examine dataset and find what characteristics make a wine "tasty" by trying to find correlations
   or relationships between various wine characteristics and its taste value. Do this using Tableau.

3. Perform data cleansing and transformation into Pandas dataframe ie remove null columns and rows and rename columns so there are no spaces.

4. Read csv data into Pandas dataframe and do a describe() to see the min and max values for each of the characteristics. Quality ranges from 3 to 9.

5. Create a frequency histogram to see what the distribution of the "quality" characteristic is like.
Most of the wines are rated 6 with 5 and 7 coming in second and third respectively.

6. Using Tableau plot quality against each of the 11 characteristics. This showed that the characteristics of alchohol, citric acid, sulphates, density and residual sugar are highest with the mid-range quality wines (5,6,7), whilst total sulfur dioxide, free sulfur dioxide and fixed acidity are highest with the lower rated wines (less than 5)

7. Create a Train Test split using sklearn
X will contain the 11 measurable characteristics whilst y will be the "quality" measure.

8. Scale the data using StandardScaler. X and y are scaled so that we can plot the orginal data versus the scaled data. The scaled data shows up with an even distribution. We then normalise the data again but this time leaving out the y value as we want to save the X scaler as part of the model for future predictions.

9. Select a LinearRegression model. Plot the train/test data and they line up quite nicely ie lots of overlap.

10. Train the model and determine the training and testing data score.

10. We quantify our model by calculating the mean squared error and r2 values.
MSE: 0.5645877915189053, R2: 0.2727562934675568

11. Save the model and xscaler with joblib 

12. We can then load them up into a new python file and use to predict the quality of a new wine.

--------------------------------------------------------------------------------
13. Create webpage using flask to display the min and max values of each characteristic and allow input of a new wine's values to predict a quality score. Also display the Tableau graphs on the web page

14. Deploy web page using Heroku or or means.
