#!/bin/bash

yarn typeorm migration:run

yarn server

/bin/sh -c "while sleep 1000; do :; done"
