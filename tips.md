either git clone {git url} --recirsive upfront or git submodule update --init --recursive after


if you run into issues wit not beng able to guess system - https://github.com/visionmedia/expresso/issues/178

wget 'http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD' -O config.guess


if you have issue with aclocal not being found - Before running ./configure try running autoreconf -f -i


delete the last commit for a branch - git reset --soft HEAD~1 and the git push --force

compile all cpp files - g++ *.cpp -o rubiks -lGL -lGLU -lglut -lSDL2
