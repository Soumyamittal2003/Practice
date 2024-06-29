from flask import Flask,redirect,url_for,render_template,request



app=Flask(__name__) #WSGI Application


@app.route('/') #decorator , below function is exectude 
def welcome():
    return "wellcome to my you tube.pls pls"

@app.route('/result/<int:score>')
def success(score):
    result=''
    if score<50:
        result="fail"
    else:
        result='pass'
    return result

@app.route('/submit',methods=['POST','GET'])
def submit():
    pass



if __name__=='__main__':
    app.run(debug=True)
