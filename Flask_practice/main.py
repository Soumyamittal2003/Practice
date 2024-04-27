###integrate html with flask
## http verb get and post
##Jinja 2 template engine
'''
{%....%} for statement 
{{    }} expression for output
{#.....#} internal comment

'''

from flask import Flask,redirect,url_for,render_template,request

app=Flask(__name__)
@app.route('/')
def welcome():
    return render_template('marks_form.html')
@app.route('/success/<int:score>')
def success(score):
    
    return render_template('result.html',result=score)

@app.route('/fail/<int:score>')
def fail(score):
    return "The Person has failed and the marks is "+ str(score)

@app.route('/submit',methods=['POST','GET'])
def submit():
    total_score=0
    if request.method=='POST':
        science=float(request.form['science'])
        maths=float(request.form['maths'])
        english=float(request.form['english'])
        total_score=(science+maths+english)/3
    res=""
    return redirect(url_for('success',score=total_score))





if __name__=='__main__':
    app.run(debug=True)