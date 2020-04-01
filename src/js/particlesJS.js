import './plugins/particles.js-master/particles';

const particles = function() {
  console.log(particlesJS);
  particlesJS.load('header', 'src/js/plugins/particles.js-master/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
};

export default particles;