#!/bin/bash
vlc -vvv v4l2:///dev/video0 --sout '#transcode{vcodec=mp4v,acodec=none}:duplicate{dst=http{mux=ts,dst=:8082/},dst=display}' --no-sout-all  --sout-keep
:sout=#transcode{vcodec=mp4v,acodec=none}:duplicate{dst=http{mux=ts,dst=:8082/},dst=display} :no-sout-all :sout-keep

#vlc tmp/output.avi --sout "#duplicate{dst=std{access=http,mux=ts,dst=127.0.0.1:8080}}"
#vlc -vvv I dummy v4l2:///dev/video0 --sout '#transcode{vcodec=mp4v,acodec=none}:standard{access=http,mux=ts,dst=0.0.0.0:8080}'
#vlc v4l2:///dev/video0
#gst-launch-1.0 v4l2src ! jpegdec ! xvimagesink
#vlc -vvv v4l2:///dev/video0 '#standard{access=http,mux=ts,dst=0.0.0.0:12345}'
#gst-launch-1.0 v4l2src ! videoconvert ! videoscale ! video/x-raw, width=640, height=480, framerate=30/1 ! autovideosink
#vlc tmp/output.avi --sout "#duplicate{dst=std{access=http,mux=ts,dst=127.0.0.1:8080}}"
#vlc -vvv -I dummy v4l2:///dev/video0 --sout '#transcode{vcodec=mp4v,acodec=none}:standard{access=http,mux=ts,dst=0.0.0.0:8082}'
