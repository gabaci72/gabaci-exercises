#Create a variable outside of a function, and use it inside the function
x = "awesome"

def myfunc():
  print("Python is " + x)
myfunc()

#
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)
#
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
#
x = "awesome"

def myfunc():
  global x
  x = "great"

myfunc()

print("Python is " + x)
