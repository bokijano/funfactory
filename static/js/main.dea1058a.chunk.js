(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/cloud3.48e2daf2.png"},function(e,a,t){e.exports=t.p+"static/media/leaf5.71a9b46d.png"},function(e,a,t){e.exports=t.p+"static/media/leaf6.d6b9c4a6.png"},function(e,a,t){e.exports=t.p+"static/media/cloud.9bc856b8.png"},function(e,a,t){e.exports=t.p+"static/media/cloud2.6b632eb1.png"},,,,function(e,a,t){e.exports=t.p+"static/media/leaf.94c1f69a.png"},function(e,a,t){e.exports=t.p+"static/media/leaf1.e4c26740.png"},function(e,a,t){e.exports=t.p+"static/media/leaf2.99aad25e.png"},function(e,a,t){e.exports=t.p+"static/media/leaf3.6624b899.png"},function(e,a,t){e.exports=t.p+"static/media/leaf4.6ba0959e.png"},function(e,a,t){e.exports=t.p+"static/media/leaf7.977e01a8.png"},,,,,,function(e,a,t){e.exports=t.p+"static/media/music2.d0265401.jpg"},function(e,a,t){e.exports=t.p+"static/media/music3.8cac1725.jpg"},function(e,a,t){e.exports=t.p+"static/media/listen.88d9c58b.jpg"},function(e,a,t){e.exports=t.p+"static/media/movie1.805d4359.jpg"},function(e,a,t){e.exports=t.p+"static/media/movie2.d0b523b8.jpg"},function(e,a,t){e.exports=t.p+"static/media/games1.8807bdbc.jpg"},function(e,a,t){e.exports=t.p+"static/media/games2.9ce5f3f1.jpg"},,function(e,a,t){e.exports=t(74)},,,,,function(e,a,t){},,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(33),r=t.n(c),s=t(2),i=t(3),m=t(5),o=t(4),u=t(6),p=(t(49),t(43)),E=t(10),d=t.n(E),v=t(15),h=l.a.createContext(),f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={loading:!0,firstOpen:!0,isOpen:!1,API_KEY:"5f1515407b5d31af2563839415a04874",url:"https://api.themoviedb.org/3/search/movie?api_key=5f1515407b5d31af2563839415a04874",movies:[],searchMovie:"",findMovie:!1,imageURL:"https://image.tmdb.org/t/p/w500",path:["/movie/popular","/movie/now_playing","/movie/top_rated","/movie/upcoming"],moviesContainer:[],popular:[],nowPlaying:[],topRated:[],upcoming:[],movieSectDisplay:!0,modalDisplay:!1,movieID:"",details:"",actors:[],trailer:"",date:"",genre:"",trailerURL:"https://www.youtube.com/embed/"},t.handleError=function(e){console.log(e)},t.displayDetails=function(e){var a=e.target;if("img"===a.tagName.toLowerCase()||"button"===a.tagName.toLowerCase()){var n=a.dataset.movieId,l=t.generateUrl("/movie/".concat(n));fetch(l).then(function(e){return e.json()}).then(function(e){t.setState({details:e,date:e.release_date.substring(0,4),genre:[e.genres[0].name,e.genres[1].name]})}).catch(t.handleError);var c=t.generateUrl("/movie/".concat(n,"/credits"));fetch(c).then(function(e){return e.json()}).then(function(e){t.setState({actors:[e.cast[0],e.cast[1],e.cast[2]]})}).catch(t.handleError);var r=t.generateUrl("/movie/".concat(n,"/videos"));fetch(r).then(function(e){return e.json()}).then(function(e){t.setState({trailer:e.results[0].key})}).catch(t.handleError),t.setState({modalDisplay:!0})}},t.removeModal=function(){t.setState({modalDisplay:!1,details:"",actors:[],trailer:"",date:"",genre:""})},t.componentDidMount=function(){t.getPopularMovies(),t.getNowPlayingMovies(),t.getTopRatedMovies(),t.getUpcomingMovies(),console.log(),setTimeout(function(){t.setState({loading:!1})},3e3)},t.handleToggle=function(){t.setState({isOpen:!t.state.isOpen})},t.handleBack=function(){t.setState({isOpen:!1,firstOpen:!1,movieSectDisplay:!0})},t.handleChange=function(e){t.setState({searchMovie:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.getMoviesData(t.state.searchMovie),t.setState({searchMovie:"",movieSectDisplay:!1})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"generateUrl",value:function(e){return"https://api.themoviedb.org/3".concat(e,"?api_key=5f1515407b5d31af2563839415a04874")}},{key:"getPopularMovies",value:function(){var e=Object(v.a)(d.a.mark(function e(){var a,t,n,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.generateUrl("/movie/popular"),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l=n.results.slice(0,5),this.setState({popular:l});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNowPlayingMovies",value:function(){var e=Object(v.a)(d.a.mark(function e(){var a,t,n,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.generateUrl("/movie/now_playing"),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l=n.results.slice(0,5),this.setState({nowPlaying:l});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getTopRatedMovies",value:function(){var e=Object(v.a)(d.a.mark(function e(){var a,t,n,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.generateUrl("/movie/top_rated"),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l=n.results.slice(0,5),this.setState({topRated:l});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getUpcomingMovies",value:function(){var e=Object(v.a)(d.a.mark(function e(){var a,t,n,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.generateUrl("/movie/upcoming"),e.next=3,fetch(a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l=n.results.slice(0,5),this.setState({upcoming:l});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMoviesData",value:function(){var e=Object(v.a)(d.a.mark(function e(a){var t,n,l,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.url+"&query="+a,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,0!=(c=l.results)?this.setState({movies:c,findMovie:!1}):this.setState({movies:[],findMovie:!0});case 9:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(h.Provider,{value:Object(p.a)({},this.state,{handleToggle:this.handleToggle,handleBack:this.handleBack,handleChange:this.handleChange,handleSubmit:this.handleSubmit,displayDetails:this.displayDetails,removeModal:this.removeModal})},this.props.children)}}]),a}(n.Component),g=h.Consumer,b=t(11),y=t(1),N=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(g,null,function(e){return l.a.createElement("header",{className:"navbar"},l.a.createElement("h1",null,l.a.createElement("span",null,"f"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"n"),l.a.createElement("span",null),l.a.createElement("span",null,"f"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"c"),l.a.createElement("span",null,"t"),l.a.createElement("span",null,"o"),l.a.createElement("span",null,"r"),l.a.createElement("span",null,"y")),l.a.createElement("button",{className:"nav-btn"},l.a.createElement(b.a,{onClick:e.handleToggle})),l.a.createElement("article",{className:e.isOpen?"navbar-style show-navbar":"navbar-style"},l.a.createElement(y.b,{to:"/music",onClick:e.handleBack},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),"Music"),l.a.createElement(y.b,{to:"/movies",onClick:e.handleBack},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),"Movies"),l.a.createElement(y.b,{to:"games",onClick:e.handleBack},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),"Games")))})}}]),a}(n.Component),j=(t(58),t(36)),k=t.n(j),O=t(37),w=t.n(O),x=t(38),M=t.n(x),C=t(20),S=t.n(C),D=t(21),U=t.n(D),R=t(17),B=t.n(R),L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container-cloud"},l.a.createElement("section",{className:"cloud1"},l.a.createElement("img",{src:S.a,alt:"second cloud"})),l.a.createElement("section",null,l.a.createElement("img",{src:U.a,alt:"third cloud"})),l.a.createElement("section",{className:"cloud2"},l.a.createElement("img",{src:S.a,alt:"first cloud"})),l.a.createElement("section",{className:"cloud3"},l.a.createElement("img",{src:U.a,alt:"second cloud"})),l.a.createElement("section",{className:"cloud4"},l.a.createElement("img",{src:B.a,alt:"third cloud"})),l.a.createElement("section",{className:"cloud7"},l.a.createElement("img",{src:B.a,alt:"third cloud"})),l.a.createElement("section",{className:"cloud5"},l.a.createElement("img",{src:B.a,alt:"second cloud"})),l.a.createElement("section",{className:"cloud6"},l.a.createElement("img",{src:S.a,alt:"first cloud"})),l.a.createElement("section",{className:"cloud7"},l.a.createElement("img",{src:U.a,alt:"second cloud"})),l.a.createElement("section",{className:"cloud8"},l.a.createElement("img",{src:B.a,alt:"third cloud"})),l.a.createElement("article",{className:"home-style"},l.a.createElement("section",{className:"music"},l.a.createElement("h1",null,l.a.createElement("span",null,"m"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"s"),l.a.createElement("span",null,"i"),l.a.createElement("span",null,"c")),l.a.createElement("div",{className:"circle circle1"},l.a.createElement("img",{src:k.a,alt:"band picture"})),l.a.createElement("div",{className:"circle circle2"},l.a.createElement("img",{src:w.a,alt:"band picture"})),l.a.createElement("div",{className:"circle circle3"},l.a.createElement("img",{src:M.a,alt:"listen picture"})),l.a.createElement("p",null,"Everybody loves music of one sort or other, some sing or play an instrument while others enjoy listening."),l.a.createElement("p",null,"Dopamine is a feel-good chemical released by the brain. This chemical is directly involved in motivation, as well as addiction. These studies found a biological explanation for why music always has been such a huge part of emotional events around the world since the beginning of human history."),l.a.createElement("p",null,"Favorite songs are often context-dependent. Even though many people often change their favorite song depending on the most recent releases, it is proven that long-lasting preferences are due mainly to an emotional attachment to a memory associated with the song."),l.a.createElement("h3",null,"Search for favourite song and other content on our page!!!")))))}}]),a}(n.Component),T=(t(60),t(25)),P=t.n(T),F=t(26),_=t.n(F),I=t(27),A=t.n(I),G=t(28),H=t.n(G),q=t(29),J=t.n(q),V=t(18),W=t.n(V),Y=t(19),K=t.n(Y),$=t(30),z=t.n($),Q=t(39),X=t.n(Q),Z=t(40),ee=t.n(Z);function ae(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container-leaves"},l.a.createElement("section",{className:"back-leaves"},l.a.createElement("div",{className:"set-leaves"},l.a.createElement("div",null,l.a.createElement("img",{src:P.a,alte:"leaf one"})),l.a.createElement("div",null,l.a.createElement("img",{src:_.a,alt:"leaf two"})),l.a.createElement("div",null,l.a.createElement("img",{src:A.a,alt:"leaf three"})),l.a.createElement("div",null,l.a.createElement("img",{src:H.a,alt:"leaf four"})),l.a.createElement("div",null,l.a.createElement("img",{src:J.a,alt:"leaf five"})),l.a.createElement("div",null,l.a.createElement("img",{src:W.a,alt:"leaf six"})),l.a.createElement("div",null,l.a.createElement("img",{src:K.a,alt:"leaf even"})),l.a.createElement("div",null,l.a.createElement("img",{src:z.a,alt:"leaf eight"})),l.a.createElement("div",null,l.a.createElement("img",{src:W.a,alt:"leaf eight"})),l.a.createElement("div",null,l.a.createElement("img",{src:K.a,alt:"leaf nine"})))),l.a.createElement("section",{className:"back-leaves"},l.a.createElement("div",{className:"set-leaves set-leaves2"},l.a.createElement("div",null,l.a.createElement("img",{src:P.a,alte:"leaf one"})),l.a.createElement("div",null,l.a.createElement("img",{src:_.a,alt:"leaf two"})),l.a.createElement("div",null,l.a.createElement("img",{src:A.a,alt:"leaf three"})),l.a.createElement("div",null,l.a.createElement("img",{src:H.a,alt:"leaf four"})),l.a.createElement("div",null,l.a.createElement("img",{src:J.a,alt:"leaf five"})),l.a.createElement("div",null,l.a.createElement("img",{src:W.a,alt:"leaf six"})),l.a.createElement("div",null,l.a.createElement("img",{src:K.a,alt:"leaf even"})),l.a.createElement("div",null,l.a.createElement("img",{src:z.a,alt:"leaf eight"})),l.a.createElement("div",null,l.a.createElement("img",{src:W.a,alt:"leaf eight"})),l.a.createElement("div",null,l.a.createElement("img",{src:K.a,alt:"leaf nine"})))),l.a.createElement("article",{className:"movies-style"},l.a.createElement("section",{className:"movies"},l.a.createElement("h1",null,l.a.createElement("span",null,"m"),l.a.createElement("span",null,"o"),l.a.createElement("span",null,"v"),l.a.createElement("span",null,"i"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"s")),l.a.createElement("div",{className:"circle circle1"},l.a.createElement("img",{src:X.a,alt:"movie image one"})),l.a.createElement("div",{className:"circle circle2"},l.a.createElement("img",{src:ee.a,alt:"movie image two"})),l.a.createElement("p",null,"Movies have the magical power of suspending our real-life problems for at least the duration of the film. Not only that, but movies can also take us to distant worlds, full of fantastic characters and scenarios. So much so, that sometimes you might forget, that those characters are actually just people, and the distant world is a film set. The creation of a movie is a real and full-time job for the cast and crew. And same as with our lives and jobs, not only ordinary but also curious things do happen."),l.a.createElement("h3",null,"Find all about your favourite movie!!!")))))}t(62);var te=t(41),ne=t.n(te),le=t(42),ce=t.n(le);function re(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"container-pulse"},l.a.createElement("section",{className:"back-pulse"},l.a.createElement("div",{className:"pulse"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("section",{className:"games-style"},l.a.createElement("section",{className:"movies"},l.a.createElement("h1",null,l.a.createElement("span",null,"g"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"m"),l.a.createElement("span",null,"e"),l.a.createElement("span",null,"s")),l.a.createElement("div",{className:"circle circle1"},l.a.createElement("img",{src:ne.a,alt:"Games image one"})),l.a.createElement("div",{className:"circle circle2"},l.a.createElement("img",{src:ce.a,alt:"Games image two"})),l.a.createElement("p",null,"Video game lovers seem to have an appetite that seems quite insatiable. This is why game developers are working odd hours putting in the effort in trying to come up with products that will please their consumers. Over the years, games have evolved tremendously offering a different type of experiences for experienced players as well as novices. The market has also experienced growth from a simple niche market to one that brings in billions of revenue on a yearly basis."),l.a.createElement("h3",null,"Play same games on our page!!!")))))}var se=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("div",{className:"home-display"},l.a.createElement("div",{className:"music-display"},l.a.createElement(L,null)),l.a.createElement("div",{className:"movies-display"},l.a.createElement(ae,null)),l.a.createElement("div",{className:"games-display"},l.a.createElement(re,null))))},ie=(t(64),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(g,null,function(e){return l.a.createElement("header",{className:"music-navbar"},l.a.createElement(y.b,{to:"/"},l.a.createElement("h1",null,l.a.createElement("span",null,"f"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"n"),l.a.createElement("span",null),l.a.createElement("span",null,"f"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"c"),l.a.createElement("span",null,"t"),l.a.createElement("span",null,"o"),l.a.createElement("span",null,"r"),l.a.createElement("span",null,"y"))),l.a.createElement("button",{onClick:e.handleToggle},l.a.createElement(b.a,null)),l.a.createElement("article",{className:e.isOpen?"navbar-style show-navbar":"navbar-style animate-navbar"},l.a.createElement(y.b,{to:"/",onClick:e.handleBack},"Home"),l.a.createElement(y.b,{to:"/movies",onClick:e.handleBack},"Movies"),l.a.createElement(y.b,{to:"/games",onClick:e.handleBack},"Games")))})}}]),a}(n.Component)),me=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ie,null))}}]),a}(n.Component),oe=(t(66),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(g,null,function(e){return l.a.createElement("header",{className:"movies-navbar"},l.a.createElement(y.b,{to:"/"},l.a.createElement("h1",null,l.a.createElement("span",null,"f"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"n"),l.a.createElement("span",null),l.a.createElement("span",null,"f"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"c"),l.a.createElement("span",null,"t"),l.a.createElement("span",null,"o"),l.a.createElement("span",null,"r"),l.a.createElement("span",null,"y"))),l.a.createElement("button",{onClick:e.handleToggle},l.a.createElement(b.a,null)),l.a.createElement("ul",{className:e.isOpen?"navbar-style show-navbar":"navbar-style"},l.a.createElement("li",null,l.a.createElement(y.b,{to:"/",onClick:e.handleBack},"Home")),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/music",onClick:e.handleBack},"Music")),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/games",onClick:e.handleBack},"Games"))))})}}]),a}(n.Component));t(68);function ue(e){return l.a.createElement(l.a.Fragment,null,e.containers.map(function(a){return l.a.createElement("img",{key:a.id,src:e.imgURL+a.poster_path,alt:"container picture","data-movie-id":a.id,onClick:e.displayDetails})}))}function pe(e){return l.a.createElement("section",{className:e.value.movieSectDisplay?"movie-list":"no-display"},l.a.createElement("div",{className:"container-movies"},l.a.createElement("h1",null,"Now Playing Movies"),l.a.createElement(ue,{displayDetails:e.value.displayDetails,containers:e.value.nowPlaying,imgURL:e.value.imageURL})),l.a.createElement("div",{className:"container-movies"},l.a.createElement("h1",null,"Popular Movies"),l.a.createElement(ue,{displayDetails:e.value.displayDetails,containers:e.value.popular,imgURL:e.value.imageURL})),l.a.createElement("div",{className:"container-movies"},l.a.createElement("h1",null,"Top Rated Movies"),l.a.createElement(ue,{displayDetails:e.value.displayDetails,containers:e.value.topRated,imgURL:e.value.imageURL})),l.a.createElement("div",{className:"container-movies"},l.a.createElement("h1",null,"Upcoming Movies"),l.a.createElement(ue,{displayDetails:e.value.displayDetails,containers:e.value.upcoming,imgURL:e.value.imageURL})))}function Ee(e){var a=e.value,t=a.removeModal,n=a.imageURL,c=a.date,r=a.genre,s=a.actors,i=a.trailer,m=a.trailerURL,o=e.value.details,u=o.poster_path,p=o.title,E=o.tagline,d=o.overview;return l.a.createElement("section",{className:"modal-content"},l.a.createElement("p",{className:"close",onClick:t},"\xd7"),l.a.createElement("div",{className:"movies-style"},l.a.createElement("img",{src:n+u,alt:"modal picture"}),l.a.createElement("section",{className:"modals-details"},l.a.createElement("h2",{id:"modal-title"},p," (",c,")"),l.a.createElement("h3",null,E),l.a.createElement("h2",{id:"modal-genre"},r[0]," ",r[1]),l.a.createElement("p",null,d))),l.a.createElement("div",{className:"actors"},s.map(function(e){return l.a.createElement("section",{key:e.id,className:"actor-char"},l.a.createElement("img",{src:n+e.profile_path,alt:""}),l.a.createElement("h2",null,e.name," as ",e.character))})),l.a.createElement("div",{className:"trailer"},l.a.createElement("iframe",{src:m+i,frameBorder:"0",allowFullScreen:!0})))}function de(e){return l.a.createElement("div",{className:e.value.movieSectDisplay?"no-display":"movie"},l.a.createElement("div",{className:e.value.modalDisplay?"modal":"no-display"},l.a.createElement(Ee,{value:e.value,removeModal:e.value.removeModal})),e.value.movies.map(function(a){return l.a.createElement("div",{key:a.id,className:null!==a.poster_path?"searched-movie":"no-display"},l.a.createElement("img",{src:e.value.imageURL+a.poster_path,"data-movie-id":a.id}),l.a.createElement("section",{className:"about-style"},l.a.createElement("h2",null,a.title),l.a.createElement("p",null,a.overview),l.a.createElement("button",{className:"more-details","data-movie-id":a.id,onClick:e.value.displayDetails},"more details")))}),l.a.createElement("h2",{className:e.value.findMovie?"display-msg":"no-display"},"No Movies Match Your Search"))}var ve=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null,function(e){return l.a.createElement("article",{className:"app-style"},l.a.createElement("div",{className:e.modalDisplay?"modal":"no-display"},l.a.createElement(Ee,{value:e,removeModal:e.removeModal})),l.a.createElement("section",{className:"welcome-style"},l.a.createElement("h1",{onClick:e.handleBack},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),"MOVIE APPLICATION")),l.a.createElement(pe,{value:e}),l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("h3",null,"Search for your favourite movie"),l.a.createElement("section",{className:"form-style"},l.a.createElement("input",{className:"text-field",type:"text",value:e.searchMovie,onChange:e.handleChange}),l.a.createElement("button",{type:"submit"},l.a.createElement(b.b,null)))),l.a.createElement(de,{value:e}))}))}}]),a}(n.Component),he=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,null),l.a.createElement(ve,null))}}]),a}(n.Component),fe=(t(70),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(g,null,function(e){return l.a.createElement("header",{className:"games-navbar"},l.a.createElement(y.b,{to:"/"},l.a.createElement("h1",null,l.a.createElement("span",null,"f"),l.a.createElement("span",null,"u"),l.a.createElement("span",null,"n"),l.a.createElement("span",null),l.a.createElement("span",null,"f"),l.a.createElement("span",null,"a"),l.a.createElement("span",null,"c"),l.a.createElement("span",null,"t"),l.a.createElement("span",null,"o"),l.a.createElement("span",null,"r"),l.a.createElement("span",null,"y"))),l.a.createElement("button",{onClick:e.handleToggle},l.a.createElement(b.a,null)),l.a.createElement("ul",{className:e.isOpen?"show-navbar":null},l.a.createElement("li",null,l.a.createElement(y.b,{to:"/",onClick:e.handleBack},l.a.createElement("span",null),"Home")),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/music",onClick:e.handleBack},l.a.createElement("span",null),"Music")),l.a.createElement("li",null,l.a.createElement(y.b,{to:"/movies",onClick:e.handleBack},l.a.createElement("span",null),"Movies"))))})}}]),a}(n.Component));function ge(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(fe,null))}var be=t(13);t(72);function ye(){return l.a.createElement("article",{className:"container"},l.a.createElement("section",{className:"loader"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",null,"Loading"))}var Ne=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(g,null,function(e){return l.a.createElement(l.a.Fragment,null,e.loading?l.a.createElement(ye,null):e.firstOpen?l.a.createElement(se,null):l.a.createElement(be.c,null,l.a.createElement(be.a,{exact:!0,path:"/",component:se}),l.a.createElement(be.a,{path:"/music",component:me}),l.a.createElement(be.a,{path:"/movies",component:he}),l.a.createElement(be.a,{path:"/games",component:ge})))})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null,l.a.createElement(y.a,null,l.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[44,1,2]]]);
//# sourceMappingURL=main.dea1058a.chunk.js.map