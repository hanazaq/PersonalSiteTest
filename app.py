from flask import Flask ,render_template
import random
app = Flask(__name__)

"""@app.route("/web")
def random():
	return "hi"""

@app.route("/web")
#def index():
#	quote = ["I'm strong", "I'm brad", "I'm dude", "I'm cool"]
#	a=(random.choice(quote))
#	return (a +str(quote))
def website():
	return render_template('perfect.html')

"""@app.route("/<name>")
def randome (name):
	return "Hello" + name"""


if __name__== "__main__":
	app.run(port=8000,debug=True)

