# Project Manna Backend


## Description
An enhanced SIR model to predict covid risk and vaccination urgency and a server to serve the models via APIs.

## Dependency Installation
```python3 -m pip install -r requirements.txt```

## How to run
```
cd backend
python3 predictor.py (for model training, to be run once everyday)
python3 herokuDeploy.py (starting the backend server)
```
## Example APIs
[Homepage](https://project-manna-backend.herokuapp.com/getCount)
[TableInfo](https://project-manna-backend.herokuapp.com/getCols)
[AllRows](https://project-manna-backend.herokuapp.com/getRows)
[SortedRows](https://project-manna-backend.herokuapp.com/getRowsSortByCol/%7B%22confirmed%22:%22ascend%22,%20%22active%22:%22ascend%22%7D)