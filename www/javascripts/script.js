/* JavaScript - START */
/* Safari specific Fixes - START */

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {/* Chrome */}
    else{
        var elementExists = document.getElementById("fluidHover");
        if(elementExists !== null){
            document.getElementById('fluidHover').style.display = "none";
        }
    }
}
/* Safari specific Fixes - END */

/* Form date check - START */
function numeric(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    return true;
}
/* Form date check - END */

/* Toggle Menu - START */
function showMenu(){
    document.getElementById("langNav").classList.add("showMenu");
}

function closeMenu(){
    document.getElementById("langNav").classList.remove("showMenu");
}
/* Toggle Menu - END */

/* Typewriter Animation - START */
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = this.txt;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
/* Typewriter Animation - END */

/* Tabs - START */
function aboutTabs(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
/* Tabs - END */

/* JavaScript - END */
/* jQuery - START */
jQuery(document).ready(function() {
    
    /* Sort Section Icon by Priority - START */
    var sortSection = jQuery("#siteSections");
    sortSection.find('.sectionLinks').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortSection);
    /* Sort Section Icon by Priority - END */
    
    /* Sort Menu Icon by Priority - START */
    var sortMenuSection = jQuery("#menuSortIcon");
    sortMenuSection.find('.sectionLinks').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortMenuSection);
    /* Sort Menu Icon by Priority - END */
    
    /* Sort Call2Action Icon by Priority - START */
    var sortActionIcon = jQuery("#call2ActionIconSort");
    sortActionIcon.find('.call2ActionIcons').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortActionIcon);
    /* Sort Call2Action Icon by Priority - END */
    
    /* Sort Call2Action Contact Icon by Priority - START */
    var sortActionIcon = jQuery(".call2ActionContactContainer");
    sortActionIcon.find('.call2ActionContact').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortActionIcon);
    /* Sort Call2Action Contact Icon by Priority - END */
    
    /* Sort Featured Work by Priority - START */
    var sortFeaturedWork = jQuery("#featuredWork");
    sortFeaturedWork.find('.featuredSort').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortFeaturedWork);
    /* Sort Featured Work by Priority - END */
    
    /* Sort About Tabs by Priority - START */
    var sortAboutTabs = jQuery(".tab");
    sortAboutTabs.find('.tablinks').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortAboutTabs);
    /* Sort About Tabs by Priority - END */
    
    /* Sort Filters by Priority - START */
    var sortAboutTabs = jQuery("#portfolioFilters");
    sortAboutTabs.find('.filterBtn').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortAboutTabs);
    /* Sort Filters by Priority - END */
    
    /* Section Icon Animation - START */
    jQuery(".sectionLinks").hover(function() {
        jQuery(this).siblings(".sectionLinks").addClass("overlayIcons");
    }, function() {
        jQuery(this).siblings(".sectionLinks").removeClass("overlayIcons");
    });
    /* Section Icon Animation - END */
    
    /* Find Active Link and Show IT - START */
    jQuery(function(){
    var url = window.location.pathname, urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
        jQuery('.navLink').each(function(){
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            jQuery(this).addClass('activeLink');
        }
        });
    });
    /* Find Active Link and Show IT - END */
    
    /* Sort Navigation Btns by Priority - START */
    var sortNav = jQuery("#navWrapper");
    sortNav.find('.navLink').sort(function(a, b){
    return +a.getAttribute('value') - +b.getAttribute('value');
    }).appendTo(sortNav);
    /* Sort Navigation Btns by Priority - END */
    
    /* Hide Navigation Btns from other Sections - START */
    var checkBody = jQuery("body").attr("id");
    
    if(checkBody.includes("app") == true){
        jQuery(".musicLogo").addClass("removeLink");
        jQuery(".design").addClass("removeLink");
        jQuery(".production").addClass("removeLink");
        jQuery(".music").addClass("removeLink");
    }else if(checkBody.includes("design") == true){
        jQuery(".musicLogo").addClass("removeLink");
        jQuery(".app").addClass("removeLink");
        jQuery(".production").addClass("removeLink");
        jQuery(".music").addClass("removeLink");
    }else if(checkBody.includes("production") == true){
        jQuery(".designLogo").addClass("removeLink");
        jQuery(".app").addClass("removeLink");
        jQuery(".design").addClass("removeLink");
        jQuery(".music").addClass("removeLink");
    }else if(checkBody.includes("music") == true){
        jQuery(".app").addClass("removeLink");
        jQuery(".design").addClass("removeLink");
        jQuery(".production").addClass("removeLink");
    }
    /* Hide Navigation Btns from other Sections - END */
    
    /* Hide Section Icons on Landing Page - START */
    /* Using the same VAR as in Navigation */
    if(checkBody == "landingPage"){
       jQuery(".sectionMenuIcons").addClass("fade2Menu");
    }else{};
    /* Hide Section Icons on Landing Page - END */
    
    /* Section Icons Fade Animation - START */
    /*
    jQuery(".sectionIcons").click(function() {
        showMenu();
        
        jQuery("#siteSections").addClass("fade2Menu");
        setTimeout(function(){
            jQuery(".sectionMenuIcons").removeClass("fade2Menu");
        }, 300);
    });
    */
    /* Section Icons Fade Animation - END */
    
    /* Toogle Nav - START */
    jQuery('#toggleNavBar').on('click', function(){
        var openNav = jQuery('#navWrapper').css('opacity');
        
        if(openNav == '0'){
            jQuery('#navWrapper').css({'opacity': '1', 'visibility': 'visible'});
        }else{
            jQuery('#navWrapper').css({'opacity': '0', 'visibility': 'hidden'});
        }
    });
    /* Toogle Nav - END */
    
    /* Graphics Hover Effect - START */
    jQuery("#graphic").on("mousemove", function(e){ 
        if ($(window).width() < 700) {
        }
        else {
            var x = e.clientX;
            var y = e.clientY;

            var gW = jQuery("#graphic").width();
            var gH = jQuery("#graphic").height();

            var centerX = x - gW / 2;
            var centerY = y - gH / 2;

            var newX = (gW / gW / 100) * centerX;
            var newY = (gH / gH / 100) * centerY;

            jQuery(".movingGraphic").each(function(index){
                var newIndex = index + 1;

                if(newIndex % 2 == 0){
                    var finalX = (newIndex * 0.7) * newX;
                    var finalY = (newIndex * 0.9) * newY;

                    jQuery(this).css({"transform": "translate(" + finalX + "px, " + finalY + "px)"});
                }else{
                    var finalX = -(newIndex * 0.6) * newX;
                    var finalY = -(newIndex * 0.8) * newY;

                    jQuery(this).css({"transform": "translate(" + finalX + "px, " + finalY + "px)"});
                }
            });
        }
    });
    
    jQuery("#graphic").on("mouseleave", function(e){ 
        jQuery(".graphics").css({"transform": "translate(0px, 0px)"});
    });
    /* Graphics Hover Effect - END */
    
    /* Custom Audio player - START */
    jQuery('.projectPlaylist').hover(function(){
        if (jQuery(window).width() > 700) {
            var getPlaylistHight = jQuery(this).height();

            jQuery(this).css({'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'})

            jQuery(this).find('.playlistSongs').css({'margin-top': getPlaylistHight + 'px', 'visibility': 'visible', 'opacity': '1', 'transition-delay': '0.2s'});
        }   
    }, function(){
        if (jQuery(window).width() > 700) {
            jQuery(this).css({'border-bottom-left-radius': '20pt', 'border-bottom-right-radius': '20pt'})

            jQuery(this).find('.playlistSongs').css({'visibility': 'hidden', 'opacity': '0', 'transition-delay': '0.2s'}); 
        }
    });
    
    jQuery('.showPlaylist').on('click', function(){
        var opened = jQuery(this).closest('.projectPlaylist').find('.playlistSongs').css('visibility');
        
        if(opened == 'visible'){            
            jQuery(this).closest('.projectPlaylist').css({'border-bottom-left-radius': '20pt', 'border-bottom-right-radius': '20pt'})
            
            jQuery(this).css('transform', 'rotate(0)');
            jQuery(this).closest('.projectPlaylist').find('.playlistSongs').css({'visibility': 'hidden', 'opacity': '0', 'transition-delay': '0.2s'});
       }else{
           var getPlaylistHight = jQuery(this).closest('.projectPlaylist').height();
           jQuery(this).closest('.projectPlaylist').css({'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'})
           
            jQuery(this).css('transform', 'rotate(180deg)');
            jQuery(this).closest('.projectPlaylist').find('.playlistSongs').css({'margin-top': getPlaylistHight + 'px', 'visibility': 'visible', 'opacity': '1', 'transition-delay': '0.2s'});
       }
    });
    /* Custom Audio player - END */
    
    /* Portfolio Filter - START */
    jQuery(".filterPortfolioWork").addClass("showWork");
    
    jQuery('.filterBtn').on('click', function(){
        jQuery('.filterBtn').removeClass("activeFilter");
        
        jQuery(this).addClass('activeFilter');
        var filterID = jQuery(this).attr('ID');
        /* alert(filterID); */
        
        if(filterID == 'portfolioAll'){
            jQuery('.filterPortfolioWork').addClass("showWork");
        }else{
            jQuery('.filterPortfolioWork').removeClass("showWork");
            
            jQuery('.' + filterID).each(function(){
              jQuery(this).addClass("showWork");
            });
        }
    });
    /* Portfolio Filter - END */
    
    /* Portfolio Production Expand - START */
    jQuery('#togglePortfolioScale').on('click', function(){
        var getSection = jQuery('#selectedWork');
        
        if(getSection.hasClass('expandSelected')){
            getSection.removeClass('minimiseSelected');
            getSection.removeClass('expandSelected');
            
            jQuery('.portfolioSelectedSpace').css('height', 35 + "vh");
        }else if(getSection.hasClass('minimiseSelected')){
            getSection.removeClass('minimiseSelected');
            getSection.addClass('expandSelected');
            
            jQuery('.fa-minus').removeClass('hiddenFocus');
            jQuery('.fa-plus').addClass('hiddenFocus');
        }else{
            getSection.addClass('expandSelected');
        }
    });
    
    jQuery('#togglePortfolioFocus').on('click', function(){
        var getSection = jQuery('#selectedWork');
        
        if(getSection.hasClass('expandSelected')){
            getSection.removeClass('expandSelected');
            getSection.addClass('minimiseSelected');
            
            jQuery('.fa-minus').addClass('hiddenFocus');
            jQuery('.fa-plus').removeClass('hiddenFocus');
            
            jQuery('.portfolioSelectedSpace').css('height', 5 + "vh");
        }else if(getSection.hasClass('minimiseSelected')){
            getSection.removeClass('minimiseSelected');
            getSection.removeClass('expandSelected');
            
            jQuery('.fa-minus').removeClass('hiddenFocus');
            jQuery('.fa-plus').addClass('hiddenFocus');
            
            jQuery('.portfolioSelectedSpace').css('height', 35 + "vh");
        }else{
            getSection.addClass('minimiseSelected');
            getSection.removeClass('expandSelected');
            
            jQuery('.fa-minus').addClass('hiddenFocus');
            jQuery('.fa-plus').removeClass('hiddenFocus');
            
            jQuery('.portfolioSelectedSpace').css('height', 5 + "vh");
        }
    });
    /* Portfolio Production Expand - END */
    
    /* Portfolio Display First Work - START */
    jQuery(window).on('load', function(){
        jQuery('.portfolioContainer').first().addClass('selectedPortfolio');
        
    });
    /* Portfolio Display First Work - END */
    
    /* Portfolio Display Clicked Featured - START */
    jQuery('.featuredLink').on('click', function(){
        var className = jQuery(this).attr('value');
        localStorage.setItem("class", className);
    });

    jQuery(window).on('load', function(){
        var projectClass = localStorage.getItem("class");
        var checkIfThere = jQuery('.portfolioContainer').hasClass(projectClass);
        
        if(checkIfThere == true){
             jQuery('.selectedPortfolio').removeClass('selectedPortfolio');

            jQuery('#selectedWork').find("." + projectClass).addClass('selectedPortfolio');
        
            localStorage.clear();
        }
    })
    /* Portfolio Display Clicked Featured - END */
    
    /* Portfolio Production Display Selected Work - START */
    jQuery('.filterPortfolioWork').on('click', function(){
    var selectedPortfolioID = jQuery(this).attr('value');
        
jQuery('.selectedPortfolio').removeClass('selectedPortfolio');
    jQuery('#selectedWork .' + selectedPortfolioID).addClass('selectedPortfolio');
    });
    /* Portfolio Production Display Selected Work - END */
    
    /* MyMusic Display Selected Work - START */
    jQuery('.myMusicGrid').on('click', function(){
    var selectedPortfolioID = jQuery(this).attr('value');
        
jQuery('.selectedPortfolio').removeClass('selectedPortfolio');
    jQuery('#selectedMusic .' + selectedPortfolioID).addClass('selectedPortfolio');
    });
    /* MyMusic Display Selected Work - END */
    
    /* Bottom Hover Effect - START */
    jQuery("#bottom").on("mousemove", function(e){ 
        var y = e.clientY;
        var x = e.clientX;
        var newPositionY = -(window.innerHeight * 0.675) + y;
        var newPositionX = -(window.innerWidth * 0.075) + x;
        
        jQuery("#fluidHover").css({
            "top": newPositionY + "px", 
            "left": newPositionX + "px"
        });
    });
    
    jQuery("#bottom").on("mouseleave", function(e){ 
        jQuery("#fluidHover").css({"top": "12vh", "left": "42.5vw"});
    });
    /* Bottom Hover Effect - END */
    
    /* Hire Me Form - START */
    jQuery('.hireMe').on('click', function(){
        jQuery("#fluidHover span").css({"box-shadow": "none"});
        
        jQuery('#hireMeForm').addClass('showhireMeForm');
    });
    
    jQuery('#hireMeFormClose').on('click', function(){
        jQuery("#fluidHover span").css({"box-shadow": "0 0 0 100vw #1d1f20, inset 0 0 10pt 0 #000"});
        
        jQuery('#hireMeForm').removeClass('showhireMeForm');
    });
    
    jQuery('.blurWindow').on('click', function(){
        jQuery('#hireMeForm').removeClass('showhireMeForm');
    });
    /* Hire Me Form - END */
    
    /* Tabs on click end Animation - START */
    jQuery(window).on('load', function(){
        jQuery('.tablinks:first-of-type').addClass('tablinksFirst');
    });
    
    jQuery('.tablinks').on('click', function(){
        jQuery('.tablinks').removeClass('tablinksFirst');
    });
    /* Tabs on click end Animation - END */
    
    /* Disable Enter BTN - START */
    jQuery('form').on('keydown', function(event){
        if(event.keyCode == 9){
            event.preventDefault();
            return false;
        }else if(event.keyCode == 13){
            event.preventDefault();
            return false;
        }
    });
    /* Disable Enter BTN - END */
    
    /* Contact on click next Form section - START */
    jQuery('.nextFormTab').on('click', function () {
        var btnValue = jQuery(this).val();
        var tabWidth = jQuery('.formSplit').outerWidth();
        
        var moveForm = tabWidth * btnValue;

        var reqlength = jQuery(this).closest('.formSplit').find('.required').length;
        
        var value = jQuery(this).closest('.formSplit').find('.required').filter(function () {
            return this.value != '';
        });

        if (value.length !== reqlength | value.length > reqlength) {
        }else{
            jQuery('#formTabContainer').css("left", "-" + moveForm + "px");
        }
    });
    
    jQuery('#contact #formReset').on('click', function(){
        jQuery('#formTabContainer').css("left", "0");
    });
    jQuery('#contact .formResetNext').on('click', function(){
        jQuery('#formTabContainer').css("left", "0");
    });
    /* Contact on click next Form section - END */
    
    /* Select form option from site section - START */
    jQuery(window).on('load', function(){
        if(checkBody == "app"){
            jQuery('.jobType').val('App');
        }else if(checkBody == "design"){
            jQuery('.jobType').val('Web');
        }else if(checkBody == "production"){
            jQuery('.jobType').val('Production');
        }
    });
    /* Select form option from site section - END */
    
    /* Select form ref desc from select option - START */
    jQuery(window).on('load', function(){
        if(jQuery('.jobType').val() == "App"){
            jQuery('.refApp').addClass('activeOption');
        }else if(jQuery('.jobType').val() == "Web"){
            jQuery('.refWeb').addClass('activeOption');
        }else if(jQuery('.jobType').val() == "Production"){
            jQuery('.refProduction').addClass('activeOption');
        }
    });
    
    jQuery('.jobType').on('change', function(){
        if(jQuery(this).val() == "App"){
            jQuery('.refDesc').removeClass('activeOption');
            jQuery('.refApp').addClass('activeOption');
        }else if(jQuery(this).val() == "Web"){
            jQuery('.refDesc').removeClass('activeOption');
            jQuery('.refWeb').addClass('activeOption');
        }else if(jQuery(this).val() == "Production"){
            jQuery('.refDesc').removeClass('activeOption');
            jQuery('.refProduction').addClass('activeOption');
        }
    });
    /* Select form ref desc from select option - END */
    
    /* Disable IMG Drag - START */
    jQuery('img').on('dragstart', function(event) { event.preventDefault(); });
    /* Disable IMG Drag - END */
    
    /* Scroll 2 Top - START */
    jQuery(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            jQuery("#back2top").addClass("scrollPop");
        }else{
            jQuery("#back2top").removeClass("scrollPop");
        }
    });
    /* Scroll 2 Top - END */
    
    /* External Links in new tab - START */
    jQuery('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if(!a.test(this.href)) {
           jQuery(this).click(function(event) {
               event.preventDefault();
               event.stopPropagation();
               window.open(this.href, '_blank');
           });
       }
    });
    /* External Links in new tab - END */
    
});
/* jQuery - END */