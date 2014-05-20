window.FILES = [{
  id: 'make-vagrant-up-yours',
  title: 'Make Vagrant Up Yours',
  author: 'Juan Treminio',
  contents: "[Vagrant](http://vagrantup.com) is a command line tool to manage virtual machines. [Puppet](http://puppetlabs.com) is a command line tool to install software on virtual machines. [PuPHPet](http://puphpet.com) is an unpronounceable GUI tool to help take the pain out of working with both!"
}, {
  id: 'php-sucks-but-i-like-it',
  title: 'PHP Sucks! But I Like It!',
  author: 'Anthony Ferrara',
  contents: "I read a rather interesting post yesterday called [PHP: a fractal of bad design](http://me.veekun.com/blog/2012/04/09/php-a-fractal-of-bad-design/). It's been getting a lot of traffic among the PHP community lately because it's rather inflammatory. But to be honest, it does make a lot of really good points. It also makes a lot of mistakes and misses a bigger picture."
}];

FILES.forEach(function(file){
  FILES[file.id] = file;
});