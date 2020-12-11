import jQuery from 'jquery/dist/jquery.js';
export function handleInputChangeNormal(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });}

 jQuery('document').ready(function($) {

      var menuBtn = $('.menudesplegable'),
          menu = $('.accesos ul');
  
      menuBtn.click(function() {
  
          if( menu.hasClass('show') ) {
  
              menu.removeClass('show')
  
          } else {
  
              menu.addClass('show');
  
          }
  
      });
  
  });
  