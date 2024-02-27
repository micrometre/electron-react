#!/bin/bash
vlc -vvv -I dummy v4l2:///dev/video0 --sout '#transcode{vcodec=mp4v,acodec=none}:standard{access=http,mux=ts,dst=0.0.0.0:8082}'
