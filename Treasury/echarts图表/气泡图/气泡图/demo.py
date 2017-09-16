from flask import Flask,render_template,url_for


app = Flask(__name__)

@app.route('/')
def my_echart():
    return render_template('my_template.html')

if __name__ == "__main__":
    app.run(debug = True)