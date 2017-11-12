        function hide_img() {
            var elem = document.getElementById("myHideBtn");
            if (elem.innerHTML == 'Hide images') elem.innerHTML = 'Unhide images';
            else elem.innerHTML = "Hide images";
            var images = document.getElementsByTagName('img');
            for (i = 0; i < images.length; i++) {
                if (images[i].classList.contains('hide_img')) {
                    images[i].classList.remove('hide_img');
                    images[i].classList.add('unhide_img');
                } else {
                    images[i].classList.add('hide_img');
                }

            }
             var brand = document.getElementsByClassName('navbar-brand');
            for (i = 0; i < brand.length; i++) {
                if (brand[i].classList.contains('hide_img')) {
                    brand[i].classList.remove('hide_img');
                    brand[i].classList.add('unhide_img');
                } else {
                   brand[i].classList.add('hide_img');
                }

            }
        }
