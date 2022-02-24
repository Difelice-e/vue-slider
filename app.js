let app = new Vue(
    {
        el: '#root',
        data: {
            currentIndex: 0, 
            slideItem: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                    //isActive: true
                },

                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                    //isActive: false
                },
            
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    //isActive: false
                },
            
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    //isActive: false
                },
            
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                    //isActive: false
                }
            ],
            arrows: {
                prev: '<i class="fa-solid fa-chevron-up"></i>',
                next: '<i class="fa-solid fa-chevron-down"></i>'
            }
            
        },
        mounted: function() {
            this.intervalChangeSlide()
        }, 
        methods: {
            prevSlide: function() {
                if (this.currentIndex !== 0) {
                    this.currentIndex --
                } else {
                    this.currentIndex = this.slideItem.length - 1
                }
            },
            nextSlide: function() {
                if (this.currentIndex !== this.slideItem.length - 1) {
                    this.currentIndex ++
                } else {
                    this.currentIndex = 0
                }
            },
            intervalChangeSlide: function() {
                this.intervallo = setInterval(this.nextSlide, 3000)
            }
        },
              
    });
