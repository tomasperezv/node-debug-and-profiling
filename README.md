node-debug-and-profiling
========================

Research on the different tools available for debugging and profiling nodejs.

## Profiling

### dtrace4linux + node-stackvis

Flame graphs are a visualization of profiled software, allowing the most frequent code-paths to be identified quickly and accurately. They can be generated for nodejs applications via dtrace and node-stackvis.

#### 1st try Setting up dtrace4linux

The  goal  of dtrace4linux is to make available DTrace for the Linux  platforms.
No linux  kernel  code  is  touched in this build, but what is produced  is  a dynamically loadable kernel module.

```bash
# Example of installation of dtrace4linux in Ubuntu

# dtrace4linux is included as a submodule in the folder 'dtrace4linux'
$ git submodule update --init

# Install all of the needed dependencies
$ cd dtrace4linux
$ ./tools/get-deps.pl

# Compile and prepare the kernel module
$ make all
$ make install

# This will load the module into the kernel
$ make load
  11:43:54 Syncing...
  11:43:54 Loading: build-3.13.0-24-generic/driver/dtracedrv.ko
  11:43:55 Preparing symbols...
  11:43:55 Probes available: 442139
  11:43:58 Time: 4s
```

#### Generating profiling data

```bash
# This will sample about 100 times per second for 60 seconds and emit results to stacks.out.
# Note that this will sample all running programs called "node".
# If you want a specific process, replace execname == "node" with pid == 12345
$ dtrace -n 'profile-97/execname == "node" && arg1/{
    @[jstack(150, 8000)] = count(); } tick-60s { exit(0); }' > stacks.out
```

#### What to do if dtrace doesn't work?

OpenIndiana

## Reference

Profiling Node.js - Apr 2012
http://blog.nodejs.org/2012/04/25/profiling-node-js/

Building nodejs on openindiana - Dec 2012
http://blueslugs.com/2012/12/27/building-nodejs-on-openindiana/
