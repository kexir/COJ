import executor_utils as eu

import json
from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World from Melissa!"

@app.route("/build_and_run", methods=["POST"])
def build_and_run():
    print "Get Called!"
    data = json.loads(request.data)

    if 'code' not in data or 'lang' not in data:
        return "You should provide both 'code' and 'lang'"
    code = data['code']
    lang = data['lang']

    print "API got called with code: %s in %s" % (code, lang)

    result = eu.build_and_run(code, lang)
    return jsonify(result)


if __name__ == "__main__":
    eu.load_image()
    app.run(debug=True, threaded = True)
    # port = int(sys.argv[1])
    # print "execute in port %d" %port
    # app.run(port=port, debug=True)