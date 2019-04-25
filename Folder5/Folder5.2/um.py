'''
(This is a multi-line comment in Python.)
'''
# Nice. So you want to skip a sntax run-through and go straight
# to nn?
# Let's do that. I've already copied and pasted some code that I've been messing around with and I've accessed files, and I've tried to parse JSON files...
# But I haven't linked the two yet.
'''
So what do you want to go over?
By the way, have you decided that you're just going to do a Depp Neural Network, right? 
I think so? I'm taking the severity(and maybe some other stuff) as -sorry, I was disconnected. No? Okay, go ahead.
- Well, I probably need to know the different types of neural networks. What were you talking about when you said "RNN"?
I think it's Recurrent Neural Network? CNN? DNN? What do they both do? And when you mean maximum value, do you mean rgb-wise? Ok
I'm going to start with DNN. Do you want me to show you my code? Okay, give me a second...
There's two of you?
Do you see two of you as well?
Okay, I might try to kick the other you out?
Ghost Sarah doesn't want to get kicked out. Anyways. What do you need?
It's another type of neural net. I actually don't remember what it stands for: I've been looking into a lot.
Yeah. I've seen a bunch of people online use it. I've only used ConvolutionalNN and DeepNN.
DNN is your typical NN. I think that's the one you might want to use; I mean, I guess you can used RNN, but I haven't quite gone into much
theory on that one.
CNN is a way to sort of manage your data if you've got a bunch of points. Since I'm doing visual stuff, I'm using that. 
Pretty much I'm putting my pixels into a max pooling (finding the maximum value) for multiple points in a kernel (a group of pixels).
It then going through my data 
Yeah. 
Are you going to do DNN or look into RNN theory?
Nice. Do you know how to do it?
Whatever will help you.
'''


""" Multiple Regression/Multi target Regression Example
The input features have 10 dimensions, and target features are 2 dimension.
"""

# from __future__ import absolute_import, division, print_function
# Why did you need to import a print function?

# I don't know... That's one of the lines I didn't mess with in someone else's code. I thought it was just weirdo Python jumbo.
'''
"weirdo Python jumbo"?
That's not weird...
But fine.
Is there anything you need me to help you with?
Cool? Wow. I'm shocked that you're going to go Python.
Alright. If there's nothing you need help with, should I just be ready for anything questions / problems you have?
You answer mine (if you read them)? 
There's two of you again. VSC on Gallium seems to be acting up today?
Alright. Well, if WiFi's being weird and you don't need me, I guess we can finish this session?
I mean, I'm at a point I can say I'm finished. But, honestly, I want to try to add semantic segmentation 
and other cool stuff.
Yours is fancier. Trust me.
I'll disconnect you whenever you're ready?
Like, how C++ has the namespace stuff, etc.
I don't have any specific questions... But Python in general is actually not that bad.
I'm not!!! I'm jut saying it's not absolutely terrible... But my bias still stands regarding Java and it'll stay that way.
Sorry, I glitched out. I'm not sure it's a problem with the OS, it's probably the WiFi. Our WiFi Internet has been in and out pretty much nonstop.
There were some people working on our fence and they accidentally messed up one of the wires connecting us to the Internet... Spectrum has come and fixed it,
But we still had problems last night. Okay. Wait, Shreya, have you finished your science fair? Your project sounds so fancy.... I'm just like, I have a NN.
Question mark. 
'''

import tflearn
import numpy as np
import json

# Regression data- 10 training instances
#10 input features per instance.
X=np.random.rand(10,10).tolist()
#2 output features per instance
Y=np.random.rand(10,1).tolist()

# Nice. Is your input just random for now?

# Multiple Regression graph, 10-d input layer
input_ = tflearn.input_data(shape=[None,10])
#10-d fully connected layer
r1 = tflearn.fully_connected(input_,10)
#2-d fully connected layer for output
r1 = tflearn.fully_connected(r1,1)
r1 = tflearn.regression(r1, optimizer='sgd', loss='mean_square',
                                        metric='R2', learning_rate=0.01)

m = tflearn.DNN(r1)
m.fit(X,Y, n_epoch=100, show_metric=True, snapshot_epoch=True)

#Predict for 1 instance
testinstance=np.random.rand(5,10).tolist()
print("\nInput features:  ",testinstance)
print("\n Predicted output: ")
print(m.predict(testinstance))

line_list = []

# with open("NeuralDataParsed.json") as f:
#     for line in f:
#         # drop the newline at the end       
#         line_list.append(line.rstrip('\n'))
# line_list = json.loads("\n".join(line_list))
