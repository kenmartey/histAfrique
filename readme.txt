<template name="home">
<!-- Home
================================================== -->

<!-- End home section -->
<!-- <div class="body"> -->
<section class="banner">
<div id="bannerSlider" class="carousel carousel-fade slide" data-ride="carousel">
<!-- Indicators -->
<div class="carousel-inner">
<div class="item active" style="background-image:url(images/niceplace.jpg);">
<div class="carousel-caption">
<div class="container">
<div class="col-md-12">
<div class="content">
<h1>A new way of Tripping</h1>
<h2>Discover Interesting places around</h2>
{{#if currentUser}}
<div class="btn-orange"><a href="{{pathFor 'events'}}">Take a Tour</a></div> 
{{else}}
<div class="btn-orange"><a href="{{pathFor 'signup'}}">Register Now</a></div>
{{/if}}
</div>
</div>
</div>
</div>
</div>
<div class="item" style="background-image:url(images/eagle.jpg);">
<div class="carousel-caption">
<div class="container">
<div class="col-md-12">
<div class="content">
<h1>Amazing People</h1>
<h2>Join the family for Trips</h2>
{{#if currentUser}}
<div class="btn-orange"><a href="{{pathFor 'events'}}">Take a Tour</a></div> 
{{else}}
<div class="btn-orange"><a href="{{pathFor 'signup'}}#">Signup for FREE!</a></div>
{{/if}}
</div>
</div>
</div>
</div>
</div>
<div class="item" style="background-image:url(images/akosombo1.jpg);">
<div class="carousel-caption">
<div class="container">
<div class="col-md-12">
<div class="content">
<h1>Simple & Easy</h1>
<h2>Register,view interesting places, Join to go !</h2>
{{#if currentUser}}
<div class="btn-orange"><a href="{{pathFor 'events'}}">Take a Tour</a></div> 
{{else}}
<div class="btn-orange"><a href="{{pathFor 'signup'}}">Try TripGh for free</a></div>
{{/if}}
</div>
</div>
</div>
</div>
</div>
</div>
<ol class="carousel-indicators">
<li data-target="#bannerSlider" data-slide-to="0" class="active"></li>
<li data-target="#bannerSlider" data-slide-to="1"></li>
<li data-target="#bannerSlider" data-slide-to="2"></li>
</ol>
</div><!-- /.carousel -->

</section>
<!-- </div> -->

<!-- About 
================================================== -->
<section>
<div id="about-section">
<div class="container">
<div class="title-section animated out" data-animation="fadeInUp" data-delay="0">
<h3>About us</h3>
<hr>
<p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus.</p>
</div> <!-- end title-section -->

<div class="about-us">
<div class="row">

<div class="col-md-7">
<div class="about-img animated out" data-animation="fadeInLeft" data-delay="0">
<img src="images/about-img.png" alt="">
</div> <!-- end about-img -->
</div> <!-- end col-md-7 -->

<div class="col-md-5">
<div class="about-text animated out" data-animation="fadeInRight" data-delay="0">
<h1>Simply Amazing Services</h1>
<p>Lorem ipsum dolor amet, consectetur adipiscing elit. Pellentesque ut lacus at velit consequat sodales. Ut posuere neque in molestie gravida. Integer neque lementum posuere purus. Nam convallis ipsum. Maecenas a vulputate ipsum.</p>
<div class="about-action-btns">
<a href="#" class="btn clean">Let's Start</a>
<a href="#" class="btn clean">What is here?</a>
</div> <!-- end about-action-btns -->
</div> <!-- end about-text -->
</div> <!-- end col-md-5 -->
</div> <!-- end row -->
</div> <!-- end about-us -->
</div> <!-- end container -->
</div>
</section>
<!-- end about section -->

</template>