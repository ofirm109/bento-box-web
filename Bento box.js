(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Bento box_atlas_", frames: [[3984,0,49,49],[4035,0,32,32],[3712,1738,361,172],[3000,1570,371,189],[3712,1532,366,204],[3400,882,431,382],[0,1474,998,768],[3000,1761,278,220],[3788,1266,290,228],[3833,882,256,230],[0,0,1411,1472],[3480,500,436,380],[3400,1532,310,264],[1413,0,985,1472],[2400,800,998,768],[3400,1266,386,264],[1000,1474,998,768],[3480,0,502,498],[2400,0,1078,798],[2000,1570,998,768]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.אדממהבקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.אורזלכופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ביצהבקופסה2pngcopy = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.דגיםבקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.חזהעוףבקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.חלקשני = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.סלטבקופסה2 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.עגבניותשריבקופסה2 = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.פחמימות = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.פסטהבקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.פשטידתירקבקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.פתיתיםלקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.קוטגבקופסה = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.קופסה2pngcopy = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.תפוחאדמהלקופסהpngcopy = function() {
	this.spriteSheet = ss["Bento box_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.מעברפחמימות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.פחמימות();
	this.instance.parent = this;
	this.instance.setTransform(-476,-577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.מעברפחמימות, new cjs.Rectangle(-476,-577,985,1472), null);


(lib.מעברחלבונים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.חלקשני();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.מעברחלבונים, new cjs.Rectangle(0,0,1411,1472), null);


(lib.כפתור_תפוחיאדמה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAbIACgHIAGABQAEAAACgCQABgCAAgEIAAggIgLABIgCgJQANgBAMAAQANAAAGACQAHACAEAGQADAFAAALIAAAfIgKAAIAAgdIgBgLQgCgDgEgDQgEgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgEAAgGgCg");
	this.shape.setTransform(29.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAZIADgIQAFAEAIAAQAIAAAHgGQAHgFAAgKQAAgJgFgFQgGgGgHAAIgJABIAAAKQAAAHAGAAIAFgBIABAHIgHABQgHAAgEgDQgEgEAAgHIAAgRQAJgDAKAAQAMABAIAHQAJAIAAANQAAANgJAIQgJAJgOAAQgLAAgGgFg");
	this.shape_1.setTransform(23.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_2.setTransform(19.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAdIAAgeQAAgGgCgEQgBgEgEgCQgFgCgGAAIgLABIAAAvIgKAAIAAg3IAVgCQAKAAAGADQAHADACAFQADAGAAAJIAAAfg");
	this.shape_3.setTransform(14.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_4.setTransform(10,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAdIgVgfQgFACgBAJIgCAUIgLAAIADgUQABgNAKgFIgNgTIAMAAIARAaQAEgCABgDIACgJIACgMIAKAAIgBANQgBAHgCAFQgDAEgGAEIARAYg");
	this.shape_5.setTransform(2.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAdIAAgwIgdAAIAAgJIAyAAIAAAJIgKAAIAAAwg");
	this.shape_6.setTransform(-3.4,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAdIAAgJIASAAIAAgRIAAgMQgBgFgCgCQgDgDgEAAQgGAAgDAGQgEAGgDAPIgEAVIgLAAIAFgWIACgKIgIgYIAKAAIAEAMQADgFAFgEQAFgEAFAAQAHAAAFAEQAEADACAGQADAHAAAMIAAAZg");
	this.shape_7.setTransform(-9.6,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAdIAAgcQAAgIgCgEQgCgEgFgCQgFgCgIAAIgQACIgBgJIATgCQARAAAGAHQAHAGAAAOIAAAegAgYAdIAAgfIALAAIAAAfg");
	this.shape_8.setTransform(-16.1,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_9.setTransform(0.5,0,0.97,0.762);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAbIACgHIAGABQAEAAACgCQABgCAAgEIAAggIgMABIgBgJQANgBAMAAQANAAAGACQAHACAEAGQADAFABALIAAAfIgLAAIAAgdIgBgLQgCgDgEgDQgEgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgFAAgFgCg");
	this.shape_10.setTransform(29.7,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAFAdIAAgwIgdAAIAAgJIAxAAIAAAJIgJAAIAAAwg");
	this.shape_11.setTransform(-3.5,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAdIAAgJIARAAIAAgRIAAgMQgBgFgCgCQgDgDgDAAQgHAAgDAGQgEAGgDAPIgEAVIgLAAIAFgWIACgKIgIgYIAKAAIAEAMQACgFAGgEQAFgEAGAAQAGAAAFAEQAFADACAGQACAHAAAMIAAAZg");
	this.shape_12.setTransform(-9.7,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_13.setTransform(0.5,0,0.97,0.762);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAbIACgHIAHABQADAAABgCQACgCAAgEIAAggIgMABIgBgJQANgBAMAAQANAAAGACQAHACAEAGQADAFABALIAAAfIgLAAIAAgdIgBgLQgCgDgDgDQgFgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgFAAgFgCg");
	this.shape_14.setTransform(29.6,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAdIAAgJIASAAIAAgRIgBgMQgBgFgDgCQgCgDgDAAQgHAAgDAGQgEAGgDAPIgEAVIgLAAIAFgWIACgKIgIgYIAKAAIAEAMQADgFAFgEQAEgEAHAAQAGAAAFAEQAFADACAGQACAHAAAMIAAAZg");
	this.shape_15.setTransform(-9.8,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_16.setTransform(0.5,0,0.97,0.762);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAbIABgHIAHABQADAAABgCQACgCAAgEIAAggIgMABIgBgJQANgBANAAQALAAAHACQAHACAEAGQAEAFAAALIAAAfIgLAAIAAgdIgBgLQgBgDgEgDQgFgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgGAAQgFAAgFgCg");
	this.shape_17.setTransform(29.4,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAGAdIAAgwIgfAAIAAgJIAyAAIAAAJIgJAAIAAAwg");
	this.shape_18.setTransform(-3.8,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAdIAAgJIASAAIAAgRIgBgMQgBgFgDgCQgCgDgDAAQgHAAgDAGQgEAGgDAPIgEAVIgLAAIAFgWIADgKIgJgYIAKAAIAEAMQACgFAGgEQAEgEAHAAQAGAAAFAEQAEADADAGQACAHAAAMIAAAZg");
	this.shape_19.setTransform(-10,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:-16.1}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:2.6}},{t:this.shape_4,p:{x:10}},{t:this.shape_3,p:{x:14.6}},{t:this.shape_2,p:{x:19.3}},{t:this.shape_1,p:{x:23.6}},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_8,p:{x:-16.2}},{t:this.shape_12},{t:this.shape_11,p:{x:-3.5}},{t:this.shape_5,p:{x:2.5}},{t:this.shape_4,p:{x:9.9}},{t:this.shape_3,p:{x:14.5}},{t:this.shape_2,p:{x:19.2}},{t:this.shape_1,p:{x:23.5}},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_8,p:{x:-16.3}},{t:this.shape_15},{t:this.shape_11,p:{x:-3.6}},{t:this.shape_5,p:{x:2.4}},{t:this.shape_4,p:{x:9.8}},{t:this.shape_3,p:{x:14.4}},{t:this.shape_2,p:{x:19.1}},{t:this.shape_1,p:{x:23.4}},{t:this.shape_14}]},1).to({state:[{t:this.shape_16},{t:this.shape_8,p:{x:-16.5}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_5,p:{x:2.2}},{t:this.shape_4,p:{x:9.6}},{t:this.shape_3,p:{x:14.2}},{t:this.shape_2,p:{x:18.9}},{t:this.shape_1,p:{x:23.2}},{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,69.6,16.2);


(lib.כפתור_פתיתים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAZIADgIQAFAEAIAAQAIAAAHgGQAHgFAAgKQAAgJgFgFQgGgGgHAAIgJABIAAAKQAAAHAGAAIAFgBIABAHIgHABQgHAAgEgDQgEgEAAgHIAAgRQAJgDAKAAQAMABAIAHQAJAIAAANQAAANgJAIQgJAJgOAAQgLAAgGgFg");
	this.shape.setTransform(31.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAbIACgHIAGABQAEAAACgCQABgCAAgEIAAggIgMABIgBgJQANgBAMAAQANAAAGACQAHACAEAGQADAFABALIAAAfIgLAAIAAgdIgBgLQgCgDgEgDQgEgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgFAAgFgCg");
	this.shape_1.setTransform(24.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_2.setTransform(19.8,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAbIADgHIAFABQAEAAACgCQABgCAAgEIAAggIgLABIgBgJQAMgBAMAAQAMAAAIACQAGACAEAGQADAFAAALIAAAfIgKAAIAAgdIgBgLQgBgDgFgDQgEgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgEAAgGgCg");
	this.shape_3.setTransform(14.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_4.setTransform(10.1,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAdIAAg3IAVgCQAKAAAGADQAHADACAFQADAGAAAJIAAAfgAgOgSIAAAmIAdAAIAAgVQAAgGgCgEQgBgEgEgCQgFgCgGAAIgLABg");
	this.shape_5.setTransform(5.4,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_6.setTransform(0.5,0,0.97,0.762);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_7.setTransform(0.5,0,0.97,0.762);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_8.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,70.1,16.2);


(lib.כפתור_פשטידתירק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAZIADgIQAFAEAIAAQAIAAAHgGQAHgFAAgKQAAgJgFgFQgGgGgHAAIgJABIAAAKQAAAHAGAAIAFgBIABAHIgHABQgHAAgEgDQgEgEAAgHIAAgRQAJgDAKAAQAMABAIAHQAJAIAAANQAAANgJAIQgJAJgOAAQgLAAgGgFg");
	this.shape.setTransform(30.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAYQgGgEgEgJQgDgJAAgOIgBgQIALAAIAAAJIABATQAGAAAEgCQAFgDAAgIIABgPIAJAAIgBASIgBAHIgDAEQgBACgFACQgFACgHABQABAGAFADQAFAEAHAAQAFAAAFgEQAFgDACgFQACgFABgIIACgYIALAAIgCAVQgBALgDAIQgDAIgHAEQgHAFgLAAQgKAAgHgFg");
	this.shape_1.setTransform(23.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAaQgHgEgCgHQgDgGAAgKIAAgbIALAAIAAAdQAAAMAEAFQAFAEAFAAQAGAAADgDQAEgDABgFIABgLIAAgHQAAgNgHAAQgFAAgEAGIgCgFQAEgKAJAAQAHAAAFAGQADAGAAALIAAAEQAAAKgBAHQgDAGgGAEQgGAFgJAAQgIAAgFgEg");
	this.shape_2.setTransform(16.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_3.setTransform(11.9,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGAdIAAgwIgfAAIAAgJIAzAAIAAAJIgKAAIAAAwg");
	this.shape_4.setTransform(7.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAbIADgHIAFABQAEAAACgCQABgCAAgEIAAggIgLABIgBgJQAMgBAMAAQAMAAAIACQAGACAEAGQADAFAAALIAAAfIgKAAIAAgdIgBgLQgBgDgFgDQgEgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgEAAgGgCg");
	this.shape_5.setTransform(1.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_6.setTransform(-6.5,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AANAdIAAgcQAAgHgCgEQgCgEgEgCQgFgDgHAAIgOABIgBgJIAPgBQAQAAAIAHQAGAGAAAOIAAAeg");
	this.shape_7.setTransform(-10.9,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAnIAAg1IAJAAIAAA1gAABASIAAgIIABgJQABgEADgDIADgFQADgDAAgCIABgGIAAgIIgjAAIAAgJIAtAAIAAAPIgBAKQgBADgDAEIgDAEQgEAFAAAHIAAAJg");
	this.shape_8.setTransform(-16.4,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_9.setTransform(0.5,0,0.97,0.762);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAYQgGgEgEgJQgDgJAAgOIgBgQIALAAIAAAJIABATQAGAAAEgCQAFgDAAgIIABgPIAJAAIgBASIgBAHIgDAEIgGAEQgFACgHABQABAGAFADQAFAEAHAAQAFAAAFgEQAFgDACgFQACgFABgIIACgYIALAAIgCAVQgBALgDAIQgDAIgHAEQgHAFgLAAQgKAAgHgFg");
	this.shape_10.setTransform(23.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAaQgFgEgDgHQgCgGgBgKIAAgbIALAAIAAAdQAAAMAFAFQAEAEAFAAQAGAAAEgDQADgDABgFIABgLIAAgHQAAgNgHAAQgFAAgDAGIgEgFQAFgKAJAAQAIAAADAGQAFAGAAALIAAAEQAAAKgDAHQgCAGgGAEQgGAFgJAAQgHAAgHgEg");
	this.shape_11.setTransform(16.5,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAFAdIAAgwIgdAAIAAgJIAxAAIAAAJIgJAAIAAAwg");
	this.shape_12.setTransform(7.8,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAbIABgHIAHABQADAAABgCQACgCAAgEIAAggIgMABIgBgJQANgBANAAQAMAAAGACQAHACAEAGQAEAFAAALIAAAfIgLAAIAAgdIgBgLQgBgDgEgDQgFgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgEAAgFgCg");
	this.shape_13.setTransform(1.2,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANAdIAAgcQAAgHgBgEQgCgEgFgCQgFgDgHAAIgOABIgBgJIAQgBQAQAAAGAHQAHAGAAAOIAAAeg");
	this.shape_14.setTransform(-10.9,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_15.setTransform(0.5,0,0.97,0.762);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_16.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:-16.4}},{t:this.shape_7},{t:this.shape_6,p:{x:-6.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_8,p:{x:-16.3}},{t:this.shape_14},{t:this.shape_6,p:{x:-6.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3},{t:this.shape_11},{t:this.shape_10},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_8,p:{x:-16.3}},{t:this.shape_14},{t:this.shape_6,p:{x:-6.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3},{t:this.shape_11},{t:this.shape_10},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_8,p:{x:-16.3}},{t:this.shape_14},{t:this.shape_6,p:{x:-6.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3},{t:this.shape_11},{t:this.shape_10},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,69.3,16.2);


(lib.כפתור_פסטה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAZIADgIQAFAEAIAAQAIAAAHgGQAHgFAAgKQAAgJgFgFQgGgGgHAAIgJABIAAAKQAAAHAGAAIAFgBIABAHIgHABQgHAAgEgDQgEgEAAgHIAAgRQAJgDAKAAQAMABAIAHQAJAIAAANQAAANgJAIQgJAJgOAAQgLAAgGgFg");
	this.shape.setTransform(31.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAWQgHgIAAgOQAAgMAHgJQAIgIALAAQAHAAAGADQAGADAEAHQAEAHAAAJQAAAJgDAGQgDAHgHAEQgGAEgIAAQgLAAgIgIgAgLgOQgEAFAAAJQAAAKAEAGQAEAFAHABQAIAAAEgHQADgFAAgKQAAgJgEgGQgEgFgHgBQgHAAgEAHg");
	this.shape_1.setTransform(24.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAaQgGgEgDgHQgDgGABgKIAAgbIAKAAIAAAdQAAAMAEAFQAFAEAFAAQAGAAAEgDQADgDABgFIABgLIAAgHQAAgNgHAAQgFAAgEAGIgDgFQAFgKAJAAQAIAAADAGQAEAGAAALIAAAEQAAAKgCAHQgCAGgGAEQgGAFgJAAQgIAAgFgEg");
	this.shape_2.setTransform(18.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAdIAAgcQAAgIgCgEQgCgEgFgCQgFgCgIAAIgQACIgBgJIATgCQARAAAGAHQAHAGAAAOIAAAegAgYAdIAAgfIALAAIAAAfg");
	this.shape_3.setTransform(12,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_4.setTransform(0.5,0,0.97,0.762);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAaQgHgEgCgHQgDgGAAgKIAAgbIALAAIAAAdQAAAMAEAFQAFAEAFAAQAGAAADgDQAEgDABgFIABgLIAAgHQAAgNgHAAQgFAAgEAGIgCgFQAEgKAJAAQAHAAAFAGQAEAGgBALIAAAEQAAAKgBAHQgDAGgGAEQgGAFgJAAQgIAAgFgEg");
	this.shape_5.setTransform(18.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_6.setTransform(0.5,0,0.97,0.762);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_7.setTransform(0.5,0,0.97,0.762);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAaQgFgEgDgHQgDgGABgKIAAgbIAKAAIAAAdQAAAMAEAFQAFAEAFAAQAGAAAEgDQADgDABgFIABgLIAAgHQAAgNgHAAQgFAAgEAGIgDgFQAFgKAJAAQAIAAADAGQAEAGAAALIAAAEQAAAKgCAHQgCAGgGAEQgGAFgJAAQgIAAgGgEg");
	this.shape_8.setTransform(19,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:12}},{t:this.shape_2},{t:this.shape_1,p:{x:24.9}},{t:this.shape,p:{x:31.1}}]}).to({state:[{t:this.shape_6},{t:this.shape_3,p:{x:12}},{t:this.shape_5},{t:this.shape_1,p:{x:25}},{t:this.shape,p:{x:31.2}}]},1).to({state:[{t:this.shape_7},{t:this.shape_3,p:{x:12}},{t:this.shape_5},{t:this.shape_1,p:{x:25}},{t:this.shape,p:{x:31.2}}]},1).to({state:[{t:this.shape_7},{t:this.shape_3,p:{x:12.4}},{t:this.shape_8},{t:this.shape_1,p:{x:25.4}},{t:this.shape,p:{x:31.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,70,16.2);


(lib.כפתור_עגבניותשרי = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAWIAQgDIgKgxIALAAIAHAuQAJgEADgHQACgFAAgLIAAgTIALAAIgBAPIgBAPQAAAEgDAFQgCAFgEAEQgFAEgIADQgIADgPADg");
	this.shape.setTransform(29.5,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAdIgEgOQgFAAgFAIIgDAGIgKAAIAEgJQAEgIAFgCQAFgDAEAAIAAgOIgBgHIgDgEQgBgBgEAAIgGAAIgBgIIAJgBQAGAAAEADQAEADACAEIABALIAAAQIAFAUg");
	this.shape_1.setTransform(24.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAdIAAgJIAiAAIAAgTQAAgHgCgEQgBgEgFgDQgEgCgKAAIgKABIgBgJIAPgBQAPAAAHAHQAGAGAAAOIAAAVIAJAAIAAAJg");
	this.shape_2.setTransform(19.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAdIAAgJIARAAIAAgbIgBgHIgDgEQgBgBgEAAIgGAAIgBgIIAJgBQAGAAAEADQAEADACAEIABALIAAAkg");
	this.shape_3.setTransform(14.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_4.setTransform(11.3,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_5.setTransform(8.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAbIACgHIAHABQADAAABgCQACgCAAgEIAAggIgMABIgBgJQANgBAMAAQANAAAGACQAHACAEAGQADAFABALIAAAfIgLAAIAAgdIgBgLQgCgDgDgDQgFgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgFAAgFgCg");
	this.shape_6.setTransform(3.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAYQgGgEgEgJQgDgJAAgOIgBgQIALAAIAAAJIABATQAGAAAEgCQAFgDAAgIIABgPIAJAAIgBASIgBAHIgDAEIgGAEQgFACgHABQABAGAFADQAFAEAHAAQAFAAAFgEQAFgDACgFQACgFABgIIACgYIALAAIgCAVQgBALgDAIQgDAIgHAEQgHAFgLAAQgKAAgHgFg");
	this.shape_7.setTransform(-6.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AANAdIAAgcQAAgHgCgEQgCgEgEgCQgFgDgHAAIgOABIgBgJIAPgBQAQAAAIAHQAGAGAAAOIAAAeg");
	this.shape_8.setTransform(-13.5,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_9.setTransform(-17.3,-1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_10.setTransform(0.5,0,0.97,0.762);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_11.setTransform(0.5,0,0.97,0.762);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_12.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,68.7,16.2);


(lib.כפתור_סלט = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAWQgHgIAAgOQAAgMAHgJQAIgIALAAQAHAAAGADQAGADAEAHQAEAHAAAJQAAAJgDAGQgDAHgHAEQgGAEgIAAQgLAAgIgIgAgLgOQgEAFAAAJQAAAKAEAGQAEAFAHABQAIAAAEgHQADgFAAgKQAAgJgEgGQgEgFgHgBQgHAAgEAHg");
	this.shape.setTransform(30,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAnIAAgHQAAgHAAgEQABgDADgEIADgEQACgDABgCIABgFIAAgIIgfAAIAAgeIALAAIAAAVIAeAAIAAAOIgBAJQgBAEgDAEIgDAEQgFAFABAHIAAAJg");
	this.shape_1.setTransform(24.2,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAaQgGgEgDgHQgDgGABgKIAAgbIAKAAIAAAdQAAAMAEAFQAFAEAFAAQAGAAAEgDQADgDABgFIABgLIAAgHQAAgNgHAAQgFAAgEAGIgDgFQAFgKAJAAQAIAAADAGQAEAGAAALIAAAEQAAAKgCAHQgCAGgGAEQgGAFgJAAQgIAAgFgEg");
	this.shape_2.setTransform(18.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_3.setTransform(0.5,0,0.97,0.762);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAnIAAgHQgBgHABgEQABgDADgEIADgEQADgDAAgCIABgFIAAgIIgfAAIAAgeIALAAIAAAVIAeAAIAAAOIgBAJQgBAEgDAEIgDAEQgEAFAAAHIAAAJg");
	this.shape_4.setTransform(23.9,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAaQgFgEgDgHQgCgGgBgKIAAgbIALAAIAAAdQAAAMAFAFQAEAEAFAAQAGAAAEgDQADgDABgFIABgLIAAgHQAAgNgHAAQgFAAgDAGIgEgFQAFgKAJAAQAIAAADAGQAFAGAAALIAAAEQAAAKgDAHQgCAGgGAEQgGAFgJAAQgHAAgHgEg");
	this.shape_5.setTransform(18.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_6.setTransform(0.5,0,0.97,0.762);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_7.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:30}}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{x:29.8}}]},1).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{x:29.8}}]},1).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{x:29.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,69.1,16.2);


(lib.כפתור_חזהעוף = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAdIAAgeQAAgGgCgEQgBgEgEgCQgFgCgGAAIgLABIAAAvIgKAAIAAg3IAVgCQAKAAAGADQAHADACAFQADAGAAAJIAAAfg");
	this.shape.setTransform(30,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAdIAAgKIgBgRIAAgGQAAgJAHgGIgOAAIAAgJIAhAAIAAAIQgIAAgEAFQgFAEAAAIIAAAFIACATIAAAIg");
	this.shape_1.setTransform(24.7,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAdIAAgcQAAgIgCgEQgCgEgFgCQgFgCgIAAIgQACIgBgJIATgCQARAAAGAHQAHAGAAAOIAAAegAgYAdIAAgfIALAAIAAAfg");
	this.shape_2.setTransform(19.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAWIAQgDIgKgxIALAAIAHAuQAJgEADgHQACgFAAgLIAAgTIALAAIgBAPIgBAPQAAAEgDAFQgCAFgEAEQgFAEgIADQgIADgPADg");
	this.shape_3.setTransform(9.7,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_4.setTransform(5.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAoIAAg0QAAgGgBgEQgCgDgEgDQgEgCgHAAIgJABIAAAPQAAAGAGAAIAFAAIABAHIgHABQgHAAgEgDQgEgEAAgIIAAgVQAJgDALAAQAMAAAHAFQAIAGAAAPIAAA1g");
	this.shape_5.setTransform(1.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_6.setTransform(0.5,0,0.97,0.762);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAcIAAgJIgBgSIAAgFQAAgJAHgGIgOAAIAAgJIAhAAIAAAIQgIAAgEAEQgFAFAAAIIAAAFIACATIAAAHg");
	this.shape_7.setTransform(25.1,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAcIAAg4IAJAAIAAA4g");
	this.shape_8.setTransform(6.2,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_9.setTransform(0.5,0,0.97,0.762);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_10.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:1.2,y:1}},{t:this.shape_4,p:{x:5.8}},{t:this.shape_3,p:{x:9.7,y:0.2}},{t:this.shape_2,p:{x:19.2,y:-0.1}},{t:this.shape_1,p:{x:24.7}},{t:this.shape,p:{x:30,y:-0.1}}]}).to({state:[{t:this.shape_9},{t:this.shape_5,p:{x:1.6,y:0}},{t:this.shape_8},{t:this.shape_3,p:{x:10.1,y:-0.8}},{t:this.shape_2,p:{x:19.6,y:-1.1}},{t:this.shape_7},{t:this.shape,p:{x:30.4,y:-1.1}}]},1).to({state:[{t:this.shape_10},{t:this.shape_5,p:{x:1.6,y:1}},{t:this.shape_4,p:{x:6.2}},{t:this.shape_3,p:{x:10.1,y:0.2}},{t:this.shape_2,p:{x:19.6,y:-0.1}},{t:this.shape_1,p:{x:25.1}},{t:this.shape,p:{x:30.4,y:-0.1}}]},1).to({state:[{t:this.shape_10},{t:this.shape_5,p:{x:1.6,y:1}},{t:this.shape_4,p:{x:6.2}},{t:this.shape_3,p:{x:10.1,y:0.2}},{t:this.shape_2,p:{x:19.6,y:-0.1}},{t:this.shape_1,p:{x:25.1}},{t:this.shape,p:{x:30.4,y:-0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,69.3,16.2);


(lib.כפתור_דגים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFAdIAAgwIgeAAIAAgJIAzAAIAAAJIgKAAIAAAwg");
	this.shape.setTransform(30,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAdIgEgOQgFAAgFAIIgDAGIgKAAIAEgJQAEgIAFgCQAFgDAEAAIAAgOIgBgHIgDgEQgBgBgEAAIgGAAIgBgIIAJgBQAGAAAEADQAEADACAEIABALIAAAQIAFAUg");
	this.shape_1.setTransform(24.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_2.setTransform(21.5,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAdIAAg3IAVgCQAKAAAGADQAHADACAFQADAGAAAJIAAAfgAgOgSIAAAmIAdAAIAAgVQAAgGgCgEQgBgEgEgCQgFgCgGAAIgLABg");
	this.shape_3.setTransform(16.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_4.setTransform(0.5,0,0.97,0.762);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_5.setTransform(0.5,0,0.97,0.762);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_6.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,68.8,16.2);


(lib.כפתור_גבינתקוטג = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAdIgEgOQgFAAgFAIIgDAGIgKAAIAEgJQAEgIAFgCQAFgDAEAAIAAgOIgBgHIgDgEQgBgBgEAAIgGAAIgBgIIAJgBQAGAAAEADQAEADACAEIABALIAAAQIAFAUg");
	this.shape.setTransform(31.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAdIAAgJIAiAAIAAgTQAAgHgCgEQgBgEgFgDQgEgCgKAAIgKABIgBgJIAPgBQAPAAAHAHQAGAGAAAOIAAAVIAJAAIAAAJg");
	this.shape_1.setTransform(26.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_2.setTransform(22.2,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAdIAAgJIARAAIAAgbIgBgHIgDgEQgBgBgEAAIgGAAIgBgIIAJgBQAGAAAEADQAEADACAEIABALIAAAkg");
	this.shape_3.setTransform(18.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAbIACgHIAGABQADAAABgCQACgCAAgEIAAggIgMABIAAgJQAMgBANAAQALAAAIACQAGACAEAGQADAFAAALIAAAfIgKAAIAAgdIgBgLQgBgDgEgDQgFgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgGAAQgGAAgEgCg");
	this.shape_4.setTransform(13.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAg1IAJAAIAAA1gAABASIAAgIIABgJQABgEADgDIADgFQADgDAAgCIABgGIAAgIIgjAAIAAgJIAtAAIAAAPIgBAKQgBADgDAEIgDAEQgEAFAAAHIAAAJg");
	this.shape_5.setTransform(3.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_6.setTransform(-0.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAaQgFgEgDgHQgCgGgBgKIAAgbIALAAIAAAdQAAAMAFAFQAEAEAFAAQAGAAAEgDQADgDABgFIABgLIAAgHQAAgNgHAAQgFAAgDAGIgEgFQAFgKAJAAQAIAAADAGQAFAGAAALIAAAEQAAAKgDAHQgCAGgGAEQgGAFgJAAQgHAAgHgEg");
	this.shape_7.setTransform(-5.1,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJAdIgEgOQgFAAgFAIIgDAGIgKAAIAEgJQAEgIAFgCQAFgDAEAAIAAgOIgBgHIgDgEQgBgBgEAAIgGAAIgBgIIAJgBQAGAAAEADQAEADACAEIABALIAAAQIAFAUg");
	this.shape_8.setTransform(-10.7,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCAOIgDgOIAAgNIAKAAIAAANIgCAOg");
	this.shape_9.setTransform(-13.8,-3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_10.setTransform(0.5,0,0.97,0.762);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAbIABgIIAHABQADABABgCQACgCAAgEIAAggIgMABIgBgIQANgCAMAAQANAAAGACQAHACAEAGQADAGABALIAAAdIgLAAIAAgcIgBgKQgCgEgDgDQgFgCgJAAIgFAAIAAAhIgBAIQgBAEgDABQgDACgHAAQgFAAgEgCg");
	this.shape_11.setTransform(11.6,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAoIAAg1IAJAAIAAA1gAABARIAAgHIABgKQABgCADgFIADgDQADgDAAgDIABgGIAAgIIgjAAIAAgIIAtAAIAAANIgBAKQgBAEgDAEIgDAEQgEAFAAAGIAAAJg");
	this.shape_12.setTransform(2.4,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAcIAAg3IAJAAIAAA3g");
	this.shape_13.setTransform(-2,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNAaQgHgEgCgHQgDgGAAgKIAAgbIALAAIAAAdQAAAMAEAFQAFAEAFAAQAGAAADgDQAEgDABgFIABgLIAAgHQAAgNgHAAQgFAAgEAGIgCgFQAEgKAJAAQAHAAAFAGQADAGAAALIAAAEQAAAKgBAHQgDAGgGAEQgGAFgJAAQgIAAgFgEg");
	this.shape_14.setTransform(-6.6,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAOIgDgOIAAgNIALAAIAAANIgDAOg");
	this.shape_15.setTransform(-15.3,-4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_16.setTransform(0.5,0,0.97,0.762);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAbIACgHIAGABQAEAAACgCQABgCAAgEIAAggIgMABIgBgJQANgBAMAAQANAAAGACQAHACAEAGQADAFABALIAAAfIgLAAIAAgdIgBgLQgCgDgEgDQgEgCgJgBIgFAAIAAAiIgBAJQgBADgDABQgDACgHAAQgFAAgFgCg");
	this.shape_17.setTransform(12.6,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_18.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-10.7,y:-0.1}},{t:this.shape_7},{t:this.shape_6,p:{x:-0.5}},{t:this.shape_5,p:{x:3.9}},{t:this.shape_4},{t:this.shape_3,p:{x:18.6,y:-0.1}},{t:this.shape_2,p:{x:22.2,y:-1.5}},{t:this.shape_1,p:{x:26.4,y:-0.1}},{t:this.shape,p:{x:31.5,y:-0.1}}]}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-15.3,y:-4.1}},{t:this.shape_8,p:{x:-12.2,y:-0.5}},{t:this.shape_14,p:{x:-6.6,y:-0.5}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{x:17.1,y:-0.5}},{t:this.shape_2,p:{x:20.7,y:-1.9}},{t:this.shape_1,p:{x:24.9,y:-0.5}},{t:this.shape,p:{x:30,y:-0.5}}]},1).to({state:[{t:this.shape_18},{t:this.shape_15,p:{x:-14.3,y:-3.7}},{t:this.shape_8,p:{x:-11.2,y:-0.1}},{t:this.shape_14,p:{x:-5.6,y:-0.1}},{t:this.shape_6,p:{x:-1}},{t:this.shape_5,p:{x:3.4}},{t:this.shape_17},{t:this.shape_3,p:{x:18.1,y:-0.1}},{t:this.shape_2,p:{x:21.7,y:-1.5}},{t:this.shape_1,p:{x:25.9,y:-0.1}},{t:this.shape,p:{x:31,y:-0.1}}]},1).to({state:[{t:this.shape_18},{t:this.shape_15,p:{x:-14.3,y:-3.7}},{t:this.shape_8,p:{x:-11.2,y:-0.1}},{t:this.shape_14,p:{x:-5.6,y:-0.1}},{t:this.shape_6,p:{x:-1}},{t:this.shape_5,p:{x:3.4}},{t:this.shape_17},{t:this.shape_3,p:{x:18.1,y:-0.1}},{t:this.shape_2,p:{x:21.7,y:-1.5}},{t:this.shape_1,p:{x:25.9,y:-0.1}},{t:this.shape,p:{x:31,y:-0.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,69.8,16.2);


(lib.כפתור_ביצהקשה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAdIAAgJIAiAAIAAgTQAAgHgCgEQgBgEgFgDQgEgCgKAAIgKABIgBgJIAPgBQAPAAAHAHQAGAGAAAOIAAAVIAJAAIAAAJg");
	this.shape.setTransform(29.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAPIAAgdIAJAAIAAAdg");
	this.shape_1.setTransform(25.5,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAdIAAgJIAbAAIgegwIAMAAIAPAaQADgDACgEQACgDAAgGIAAgKIALAAIAAALIgCAIIgDAGQgDADgHAEIANATIAAAGg");
	this.shape_2.setTransform(21.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAdIAAgcQAAgIgCgEQgCgEgFgCQgFgCgIAAIgQACIgBgJIATgCQARAAAGAHQAHAGAAAOIAAAegAgYAdIAAgfIALAAIAAAfg");
	this.shape_3.setTransform(15.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAnIAAg1IAJAAIAAA1gAABASIAAgIIABgJQABgEADgDIADgFQADgDAAgCIABgGIAAgIIgjAAIAAgJIAtAAIAAAPIgBAKQgBADgDAEIgDAEQgEAFAAAHIAAAJg");
	this.shape_4.setTransform(6.3,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAYQgGgEgEgJQgDgJAAgOIgBgQIALAAIAAAJIABATQAGAAAEgCQAFgDAAgIIABgPIAJAAIgBASIgBAHIgDAEQgBACgFACQgFACgHABQABAGAFADQAFAEAHAAQAFAAAFgEQAFgDACgFQACgFABgIIACgYIALAAIgCAVQgBALgDAIQgDAIgHAEQgHAFgLAAQgKAAgHgFg");
	this.shape_5.setTransform(-0.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAdIAAgcQAAgIgCgEQgCgEgFgCQgFgCgIAAIgQACIgBgJIATgCQARAAAGAHQAHAGAAAOIAAAegAgYAdIAAgfIALAAIAAAfg");
	this.shape_6.setTransform(-7.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_7.setTransform(0.5,0,0.97,0.762);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAdIAAgJIAcAAIgfgwIAMAAIAOAaQAFgDABgEQACgDAAgGIAAgKIALAAIgBALIgBAIIgDAGQgDADgGAEIAMATIAAAGg");
	this.shape_8.setTransform(21,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAYQgGgEgEgJQgDgJAAgOIgBgQIALAAIAAAJIABATQAGAAAEgCQAFgDAAgIIABgPIAJAAIgBASIgBAHIgDAEIgGAEQgFACgHABQABAGAFADQAFAEAHAAQAFAAAFgEQAFgDACgFQACgFABgIIACgYIALAAIgCAVQgBALgDAIQgDAIgHAEQgHAFgLAAQgKAAgHgFg");
	this.shape_9.setTransform(-0.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_10.setTransform(0.5,0,0.97,0.762);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_11.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:-7.8}},{t:this.shape_5},{t:this.shape_4,p:{x:6.3}},{t:this.shape_3,p:{x:15.6}},{t:this.shape_2},{t:this.shape_1,p:{x:25.5}},{t:this.shape,p:{x:29.7}}]}).to({state:[{t:this.shape_10},{t:this.shape_6,p:{x:-8}},{t:this.shape_9},{t:this.shape_4,p:{x:6.1}},{t:this.shape_3,p:{x:15.4}},{t:this.shape_8},{t:this.shape_1,p:{x:25.3}},{t:this.shape,p:{x:29.5}}]},1).to({state:[{t:this.shape_11},{t:this.shape_6,p:{x:-8}},{t:this.shape_9},{t:this.shape_4,p:{x:6.1}},{t:this.shape_3,p:{x:15.4}},{t:this.shape_8},{t:this.shape_1,p:{x:25.3}},{t:this.shape,p:{x:29.5}}]},1).to({state:[{t:this.shape_11},{t:this.shape_6,p:{x:-8}},{t:this.shape_9},{t:this.shape_4,p:{x:6.1}},{t:this.shape_3,p:{x:15.4}},{t:this.shape_8},{t:this.shape_1,p:{x:25.3}},{t:this.shape,p:{x:29.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,68.7,16.2);


(lib.כפתור_אורז = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAdIgVgfQgFACgBAJIgCAUIgLAAIADgUQABgNAKgFIgNgTIAMAAIARAaQAEgCABgDIACgJIACgMIAKAAIgBANQgBAHgCAFQgDAEgGAEIARAYg");
	this.shape.setTransform(29.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAdIAAg5IAJAAIAAA5g");
	this.shape_1.setTransform(25.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANAdIAAgcQAAgHgBgEQgCgEgFgCQgFgDgHAAIgOABIgBgJIAQgBQAQAAAGAHQAHAGAAAOIAAAeg");
	this.shape_2.setTransform(20.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAdIAAgKIgBgRIAAgGQAAgJAHgGIgOAAIAAgJIAhAAIAAAIQgIAAgEAFQgFAEAAAIIAAAFIACATIAAAIg");
	this.shape_3.setTransform(16.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_4.setTransform(0.5,0,0.97,0.762);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_5.setTransform(0.5,0,0.97,0.762);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_6.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,68.7,16.2);


(lib.כפתור_אדממה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAdIgVgfQgFACgBAJIgCAUIgLAAIADgUQABgNAKgFIgNgTIAMAAIARAaQAEgCABgDIACgJIACgMIAKAAIgBANQgBAHgCAFQgDAEgGAEIARAYg");
	this.shape.setTransform(29.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAdIAAgwIgdAAIAAgJIAxAAIAAAJIgJAAIAAAwg");
	this.shape_1.setTransform(23.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAdIAAgJIASAAIAAgRIgBgMQgBgFgDgCQgCgDgDAAQgHAAgDAGQgEAGgDAPIgEAVIgLAAIAFgWIADgKIgJgYIAKAAIAEAMQADgFAFgEQAEgEAHAAQAGAAAFAEQAFADACAGQACAHAAAMIAAAZg");
	this.shape_2.setTransform(17.2,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAdIAAgJIATAAIAAgRIgBgMQgBgFgDgCQgCgDgEAAQgGAAgDAGQgEAGgDAPIgEAVIgKAAIAEgWIADgKIgJgYIAKAAIAEAMQACgFAGgEQAEgEAGAAQAHAAAFAEQAFADABAGQADAHAAAMIAAAZg");
	this.shape_3.setTransform(10.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAdIAAgcQAAgIgCgEQgCgEgFgCQgFgCgIAAIgQACIgBgJIATgCQARAAAGAHQAHAGAAAOIAAAegAgYAdIAAgfIALAAIAAAfg");
	this.shape_4.setTransform(4.1,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCFF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_5.setTransform(0.5,0,0.97,0.762);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBAdIAAgJIASAAIAAgRIgBgMQgBgFgDgCQgCgDgDAAQgHAAgDAGQgEAGgDAPIgEAVIgLAAIAFgWIADgKIgJgYIAKAAIAEAMQACgFAGgEQAEgEAHAAQAGAAAFAEQAFADACAGQACAHAAAMIAAAZg");
	this.shape_6.setTransform(17.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAdIAAgJIASAAIAAgRIAAgMQgBgFgDgCQgCgDgEAAQgGAAgDAGQgEAGgDAPIgEAVIgKAAIAEgWIADgKIgJgYIAKAAIAEAMQACgFAGgEQAFgEAFAAQAHAAAFAEQAEADACAGQADAHAAAMIAAAZg");
	this.shape_7.setTransform(10.9,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_8.setTransform(0.5,0,0.97,0.762);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0033CC").s().p("AlhBUIAAinILDAAIAACng");
	this.shape_9.setTransform(0.5,0,0.97,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:4.1}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:23.4}},{t:this.shape,p:{x:29.4}}]}).to({state:[{t:this.shape_8},{t:this.shape_4,p:{x:4.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{x:23.8}},{t:this.shape,p:{x:29.8}}]},1).to({state:[{t:this.shape_9},{t:this.shape_4,p:{x:4.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{x:23.8}},{t:this.shape,p:{x:29.8}}]},1).to({state:[{t:this.shape_9},{t:this.shape_4,p:{x:4.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1,p:{x:23.8}},{t:this.shape,p:{x:29.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-9.1,68.7,16.2);


(lib.הסברירקות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-185,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.הסברירקות, new cjs.Rectangle(-185,-94,371,189), null);


(lib.הסברפחמימות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-180,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.הסברפחמימות, new cjs.Rectangle(-180,-86,361,172), null);


(lib.הסברחלבונים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-183,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.הסברחלבונים, new cjs.Rectangle(-183,-102,366,204), null);


(lib.בקופסהתפוחאדמה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.תפוחאדמהלקופסהpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(97.2,-102,0.293,0.293,85.9);

	this.instance_1 = new lib.תפוחאדמהלקופסהpngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.2,-204.4,0.293,0.293,79.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהתפוחאדמה, new cjs.Rectangle(-136.2,-204.4,273.4,410), null);


(lib.בקופסהקוטג = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.קוטגבקופסה();
	this.instance.parent = this;
	this.instance.setTransform(-48,-48,0.193,0.193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהקוטג, new cjs.Rectangle(-48,-48,96.8,96.1), null);


(lib.בקופסהפתיתים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פתיתיםלקופסה();
	this.instance.parent = this;
	this.instance.setTransform(-164,-126,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהפתיתים, new cjs.Rectangle(-164,-126,329.3,253.4), null);


(lib.בקופסהפשטידתירק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פשטידתירקבקופסה();
	this.instance.parent = this;
	this.instance.setTransform(-77.6,-26.9,0.354,0.354,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהפשטידתירק, new cjs.Rectangle(-77.6,-62.3,156.3,125.8), null);


(lib.בקופסהפסטה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פסטהבקופסה();
	this.instance.parent = this;
	this.instance.setTransform(-164,-126,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהפסטה, new cjs.Rectangle(-164,-126,329.3,253.4), null);


(lib.בקופסהעגבניותשרי = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.עגבניותשריבקופסה2();
	this.instance.parent = this;
	this.instance.setTransform(-46,-55,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהעגבניותשרי, new cjs.Rectangle(-46,-55,105.9,90.2), null);


(lib.בקופסהסלט = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.סלטבקופסה2();
	this.instance.parent = this;
	this.instance.setTransform(-81,-61,0.372,0.324);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהסלט, new cjs.Rectangle(-81,-61,162.3,123.1), null);


(lib.בקופסהחזהעוף = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חזהעוףבקופסה();
	this.instance.parent = this;
	this.instance.setTransform(64.7,-39,0.276,0.346,0,0,180);

	this.instance_1 = new lib.חזהעוףבקופסה();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.2,-26.1,0.346,0.346,-15);

	this.instance_2 = new lib.חזהעוףבקופסה();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-59,-39,0.346,0.346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהחזהעוף, new cjs.Rectangle(-59,-49.1,124,99.9), null);


(lib.בקופסהדגים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.דגיםבקופסה();
	this.instance.parent = this;
	this.instance.setTransform(-61,-48,0.421,0.421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהדגים, new cjs.Rectangle(-61,-48,122.1,96), null);


(lib.בקופסהביצה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהבקופסה2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-55,-43,0.398,0.398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהביצה, new cjs.Rectangle(-55,-43,110.6,87.5), null);


(lib.בקופסהאורז = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אורזלכופסה();
	this.instance.parent = this;
	this.instance.setTransform(-164,-126,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהאורז, new cjs.Rectangle(-164,-126,329.3,253.4), null);


(lib.בקופסהאדממה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אדממהבקופסה();
	this.instance.parent = this;
	this.instance.setTransform(-84,-64,0.394,0.337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.בקופסהאדממה, new cjs.Rectangle(-84,-64,169.7,128.6), null);


(lib.i_asberim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgEQgDgEgFgDQgFgCgJABIgSABIgBgKQALgBAKAAQATAAAHAHQAIAHgBAPIAAAhgAgaAgIAAgjIALAAIAAAjg");
	this.shape.setTransform(206.5,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAcQgHgEgCgHQgDgHAAgLIAAgdIALAAIAAAfQAAAOAGAEQAFAEAFABQAHgBADgDQAEgCACgGIABgMIAAgIQgBgOgHAAQgGABgDAFIgEgFQAFgLAKAAQAIAAAFAHQAEAGAAANIAAAFQAAALgCAGQgDAHgGAFQgHAFgKAAQgIAAgHgFg");
	this.shape_1.setTransform(199.3,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAgIAAgfQAAgIgCgEQgCgFgFgCQgFgCgIAAIgPAAIgBgJIARgBQARAAAIAHQAHAHAAAPIAAAhg");
	this.shape_2.setTransform(192.4,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAgIAAgKIASAAIAAgeIgBgHQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgFAAIgGABIgBgJQAEgCAGABQAHAAAEACQAEADACAFQABAFAAAHIAAAog");
	this.shape_3.setTransform(187.2,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgKAAIAAA0g");
	this.shape_4.setTransform(182.3,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAYIARgDIgLg2IAMAAIAIAyQAKgEADgHQACgGAAgMIABgVIALAAIgBARIgBAQQAAAEgCAGQgDAGgFAEQgEAEgKAEQgIADgSADg");
	this.shape_5.setTransform(173.1,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_6.setTransform(168.7,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAfIAAgKIgBgUIgBgGQAAgJAIgHIgQAAIAAgJIAlAAIAAAHQgJAAgFAGQgFAFAAAIIAAAGIACAUIAAAJg");
	this.shape_7.setTransform(165.1,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOAgIAAgfQAAgIgCgEQgCgFgFgCQgFgCgIAAIgPAAIgBgJIARgBQASAAAGAHQAIAHAAAPIAAAhg");
	this.shape_8.setTransform(159.3,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_9.setTransform(152.3,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCAgIAAgKIAUAAIAAgSIgBgOQAAgFgDgDQgDgDgEAAQgGAAgEAHQgEAHgEAPIgEAYIgMAAIAGgZIACgKIgKgbIALAAIAFAOQADgGAGgEQAFgEAGAAQAIAAAFADQAFAEACAHQADAHAAANIAAAcg");
	this.shape_10.setTransform(147.1,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAYIARgDIgLg2IAMAAIAIAyQAKgEADgHQACgGAAgMIABgVIALAAIgBARIgBAQQAAAEgCAGQgDAGgFAEQgEAEgKAEQgIADgSADg");
	this.shape_11.setTransform(140.2,21.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_12.setTransform(135.9,21.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgKAAIAAA0g");
	this.shape_13.setTransform(131.4,21.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgLAAIAAA0g");
	this.shape_14.setTransform(125.3,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_15.setTransform(118,20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAOAgIAAgfQAAgIgCgEQgCgFgFgCQgFgCgIAAIgPAAIgBgJIARgBQARAAAIAHQAHAHAAAPIAAAhg");
	this.shape_16.setTransform(113.2,21.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_17.setTransform(108.9,20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgLAAIAAA0g");
	this.shape_18.setTransform(104.4,21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgEQgDgEgEgDQgGgCgJABIgSABIgBgKQALgBAKAAQASAAAIAHQAHAHAAAPIAAAhgAgaAgIAAgjIALAAIAAAjg");
	this.shape_19.setTransform(97.8,21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgFgFgCQgEgCgLAAIgMAAIgBgJQAIgCAJABQAQAAAHAHQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_20.setTransform(88.2,21.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAgIAAgKIAVAAIAAgSIgBgOQgBgFgDgDQgDgDgEAAQgHAAgDAHQgFAHgDAPIgEAYIgLAAIAEgZIADgKIgKgbIAMAAIAEAOQADgGAGgEQAFgEAGAAQAIAAAFADQAFAEADAHQACAHAAANIAAAcg");
	this.shape_21.setTransform(81.1,21.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_22.setTransform(73.5,21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYArIAAg6IALAAIAAA6gAABATIAAgJIABgKQABgDAEgEIADgEIADgHIABgHIAAgIIgmAAIAAgJIAxAAIAAAPIgBALIgEAIIgDAFQgFAFAAAHIAAAKg");
	this.shape_23.setTransform(66.2,22.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgEQABgEADgDIAEgEIADgHIABgGIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAFQgFAGAAAHIAAAKg");
	this.shape_24.setTransform(59.8,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_25.setTransform(55.9,24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgDQgDgFgFgCQgFgCgJAAIgSABIgBgJQALgCAKAAQATgBAHAIQAIAHgBAPIAAAhgAgaAgIAAgiIALAAIAAAig");
	this.shape_26.setTransform(206.5,6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgCgLAAIgMAAIgBgJQAIgBAJAAQAQgBAHAIQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_27.setTransform(199.6,6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOAgIAAgKIASAAIAAgeIgBgHQAAgCgDgCQgCgCgEAAIgGABIgBgJQAEgBAFAAQAIAAAEADQAEADABAEQACAFAAAHIAAAog");
	this.shape_28.setTransform(193.9,6.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPAcQgHgEgCgHQgDgHAAgLIAAgdIAMAAIAAAfQAAAOAEAFQAGADAFAAQAGAAAFgCQADgEABgFIABgMIAAgIQAAgOgIAAQgFAAgEAHIgDgGQAGgLAJAAQAJABADAGQAFAHAAAMIAAAEQAAALgDAHQgCAHgHAFQgGAFgKgBQgIABgHgFg");
	this.shape_29.setTransform(188.6,6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_30.setTransform(183.5,6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAgIAAgKIAUAAIAAgSIgBgOQgBgFgDgDQgCgDgFAAQgGAAgEAHQgFAHgDAQIgEAXIgLAAIAEgZIAEgKIgKgaIALAAIAEANQADgGAGgEQAEgFAIABQAGAAAGADQAFAEACAHQACAHAAANIAAAcg");
	this.shape_31.setTransform(175.5,6.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAfIgWghQgGADgBAJIgCAVIgMAAIACgVQACgPALgFIgPgUIAOAAIATAbQADgBACgDIACgKIACgNIALAAIgBANQgBAIgDAFQgDAEgHAEIATAbg");
	this.shape_32.setTransform(168.8,6.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAcIADgJQAGADAJAAQAIAAAIgGQAHgFAAgLQAAgKgFgGQgHgGgIAAIgJABIAAALQgBAIAIgBIAEAAIABAHQgDACgEgBQgIAAgEgDQgFgEABgIIAAgSQAKgDALAAQANAAAJAIQAJAIAAAPQAAAOgJAJQgKAJgPAAQgMAAgHgEg");
	this.shape_33.setTransform(162.1,6.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_34.setTransform(154.6,6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAgIAAgfQAAgHgCgFQgBgEgGgDQgFgCgIAAIgPABIgBgKIAQgBQATgBAGAIQAIAHAAAPIAAAhg");
	this.shape_35.setTransform(147.1,6.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgEADgEIAEgEIADgGIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_36.setTransform(138.6,5.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAPAfIgWghQgGADgBAJIgCAVIgMAAIACgVQACgPALgFIgPgUIAOAAIATAbQADgBACgDIACgKIACgNIALAAIgBANQgBAIgDAFQgDAEgHAEIATAbg");
	this.shape_37.setTransform(132.8,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgDACgEQADgFAAgHQAAgJgFgGQgGgGgJAAQgGAAgFABIgCgKIANgBQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAFQgHAEgKAAQgGAAgHgCg");
	this.shape_38.setTransform(126.4,6.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_39.setTransform(122.2,6.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgEADgEIAEgEIADgGIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_40.setTransform(117.8,5.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAPAfIgWghQgGADgBAJIgCAVIgMAAIACgVQACgPALgFIgPgUIAOAAIATAbQADgBACgDIACgKIACgNIALAAIgBANQgBAIgDAFQgDAEgHAEIATAbg");
	this.shape_41.setTransform(109.2,6.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_42.setTransform(104.2,6.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgDACgEQADgFAAgHQAAgJgFgGQgGgGgJAAQgGAAgFABIgCgKIANgBQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAFQgHAEgKAAQgGAAgHgCg");
	this.shape_43.setTransform(99.9,6.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgEADgEIAEgEIADgGIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_44.setTransform(94.3,5.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgBAgIAAgKIATAAIAAgSIgBgOQAAgFgDgDQgCgDgFAAQgHAAgDAHQgFAHgDAQIgEAXIgMAAIAGgZIADgKIgKgaIALAAIAEANQADgGAGgEQAEgFAIABQAGAAAGADQAFAEACAHQACAHAAANIAAAcg");
	this.shape_45.setTransform(85.1,6.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIAfIAAgKIgBgTIgBgHQAAgJAIgHIgQAAIAAgJIAlAAIAAAIQgJAAgFAFQgFAFAAAIIAAAGIACAUIAAAJg");
	this.shape_46.setTransform(79.5,6.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_47.setTransform(75.6,5.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_48.setTransform(72.7,8.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_49.setTransform(67,6.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgCgLAAIgMAAIgBgJQAIgBAJAAQAQgBAHAIQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_50.setTransform(62.3,6.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAOAgIAAgfQAAgHgCgFQgCgEgFgDQgFgCgIAAIgPABIgBgKIARgBQARgBAIAIQAHAHAAAPIAAAhg");
	this.shape_51.setTransform(55.7,6.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_52.setTransform(51.4,5.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAPAfIgWghQgGADgBAJIgCAVIgMAAIACgVQACgPALgFIgPgUIAOAAIATAbQADgBACgDIACgKIACgNIALAAIgBANQgBAIgDAFQgDAEgHAEIATAbg");
	this.shape_53.setTransform(46.7,6.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgCgLAAIgMAAIgBgJQAIgBAJAAQAQgBAHAIQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_54.setTransform(37.2,6.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAfIAAgJIAeAAIghg0IANAAIAQAbQAEgDACgEQACgDAAgHIABgKIALAAIAAALIgCAJQgBADgDAEQgDADgHADIAOAVIAAAHg");
	this.shape_55.setTransform(30.8,6.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_56.setTransform(26.7,6.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAOAgIAAgfQAAgHgCgFQgBgEgGgDQgFgCgIAAIgPABIgBgKIARgBQARgBAIAIQAHAHAAAPIAAAhg");
	this.shape_57.setTransform(21.9,6.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgDQgCgFgFgCQgGgCgJAAIgSABIAAgJQAKgCAKAAQASgBAIAIQAHAHABAPIAAAhgAgaAgIAAgiIALAAIAAAig");
	this.shape_58.setTransform(15.6,6.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAPAfIgWghQgGADgBAJIgCAVIgMAAIACgVQACgPALgFIgPgUIAOAAIATAbQADgBACgDIACgKIACgNIALAAIgBANQgBAIgDAFQgDAEgHAEIATAbg");
	this.shape_59.setTransform(6,6.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMAAQAIAAAGADQAGAEAFAIQAEAHAAAKQAAAKgDAGQgDAIgHAFQgGAEgKAAQgMAAgIgJgAgMgQQgEAHAAAJQAAALAEAHQAFAFAHAAQAJAAAEgGQAEgHAAgKQAAgKgEgGQgFgHgIABQgHAAgFAGg");
	this.shape_60.setTransform(-1,6.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAeIACgJIAGABQAFAAABgBQABgCAAgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgEACgGAAQgFAAgGgCg");
	this.shape_61.setTransform(-8.6,6.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgPAcQgGgEgDgHQgDgHAAgLIAAgdIAMAAIAAAfQAAAOAEAFQAGADAFAAQAGAAAFgCQADgEABgFIABgMIAAgIQAAgOgHAAQgGAAgEAHIgDgGQAGgLAJAAQAJABADAGQAFAHAAAMIAAAEQAAALgDAHQgCAHgHAFQgGAFgKgBQgIABgHgFg");
	this.shape_62.setTransform(-15.6,6.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_63.setTransform(-20.7,5.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIAAAJQgCADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_64.setTransform(-26.3,6.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_65.setTransform(-31.2,9.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgFgCQgFgDgJAAIgSACIgBgKQALgCAKAAQATAAAHAIQAIAHgBAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_66.setTransform(206.5,-7.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgPAcQgHgEgCgHQgDgHAAgLIAAgdIALAAIAAAfQAAAOAGAEQAFAFAFAAQAHAAADgDQAEgEACgEIABgNIAAgIQgBgNgHAAQgGAAgDAFIgEgFQAFgKAKAAQAIgBAFAHQAEAGAAANIAAAEQAAALgCAHQgDAHgGAFQgHAEgKABQgIgBgHgEg");
	this.shape_67.setTransform(199.3,-7.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgCgEgFgDQgFgDgIAAIgPABIgBgJIARgCQARAAAIAIQAHAHAAAPIAAAgg");
	this.shape_68.setTransform(192.4,-7.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgOAfIAAgJIASAAIAAgdIgBgIQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgFAAIgGABIgBgJQAEgBAGgBQAHAAAEAEQAEADACAEQABAEAAAJIAAAmg");
	this.shape_69.setTransform(187.2,-7.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgKAAIAAA0g");
	this.shape_70.setTransform(182.3,-7.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgEgCQgGgDgJAAIgSACIgBgKQALgCAKAAQASAAAIAIQAHAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_71.setTransform(173,-7.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AggAeIACgJIAHABQAEAAABgBQACgCAAgFIAAgjIgNABIgBgJQAOgCANAAQANAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgBADgEACQgEACgGAAQgFAAgGgCg");
	this.shape_72.setTransform(165.2,-7.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgCgEgFgDQgFgDgIAAIgPABIgBgJIARgCQARAAAIAIQAHAHAAAPIAAAgg");
	this.shape_73.setTransform(158.3,-7.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAQAfIAAggQAAgHgCgEQgBgEgFgCQgEgDgIAAIgLABIAAAzIgLAAIAAg8QAMgCALAAQAKABAHADQAHADADAGQADAGAAAJIAAAig");
	this.shape_74.setTransform(151.9,-7.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgDgLAAIgMABIgBgJQAIgBAJgBQAQAAAHAIQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_75.setTransform(145.1,-7.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgDQABgFADgDIAEgFIADgFIABgGIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_76.setTransform(136.1,-9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCAfIAAgJIAVAAIAAgSIgBgOQgBgFgDgDQgDgDgEAAQgHAAgDAHQgFAHgDAQIgEAWIgLAAIAEgYIADgLIgKgaIAMAAIAEAOQADgGAGgEQAFgEAGgBQAIAAAFAFQAFADADAHQACAHAAANIAAAbg");
	this.shape_77.setTransform(129.7,-7.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgKAAIAAA0g");
	this.shape_78.setTransform(123.3,-7.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_79.setTransform(118.7,-9.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgOAfIAAgJIASAAIAAgdIgBgIQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgFAAIgGABIgBgJQAEgBAFgBQAIAAAEAEQAEADABAEQACAEAAAJIAAAmg");
	this.shape_80.setTransform(114.9,-7.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_81.setTransform(111.5,-7.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQACgCgBgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQAAADgEACQgDACgHAAQgGAAgFgCg");
	this.shape_82.setTransform(105.9,-7.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgOAfIAAgJIASAAIAAgdIgBgIQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgFAAIgGABIgBgJQAEgBAFgBQAIAAAEAEQAEADABAEQACAEAAAJIAAAmg");
	this.shape_83.setTransform(97.2,-7.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_84.setTransform(93.9,-7.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgNAIgKQAIgJAMAAQAIAAAGADQAGAEAFAHQAEAIAAAKQAAAJgDAHQgDAIgHAEQgGAFgKAAQgMAAgIgJgAgMgQQgEAHAAAJQAAALAEAGQAFAHAHAAQAIgBAFgGQAEgHAAgKQAAgKgFgHQgEgFgIAAQgHgBgFAHg");
	this.shape_85.setTransform(89,-7.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgaAcIADgKQAFAEAKAAQAJAAAHgGQAHgFAAgLQAAgKgFgGQgHgGgIAAIgKABIAAALQAAAIAHAAIAGgBIABAHQgEABgEABQgIAAgEgFQgEgDAAgIIAAgSQAKgDALAAQAMAAAKAIQAJAIAAAPQAAAOgJAJQgKAJgQAAQgLAAgHgEg");
	this.shape_86.setTransform(82.3,-7.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_87.setTransform(77.5,-7.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_88.setTransform(71.9,-7.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgDgLAAIgMABIgBgJQAIgBAJgBQAQAAAHAIQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_89.setTransform(62.3,-7.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgIAfIAAgKIgBgUIgBgFQAAgKAIgHIgQAAIAAgJIAlAAIAAAIQgJgBgFAGQgFAFAAAJIAAAFIACAVIAAAIg");
	this.shape_90.setTransform(56.9,-7.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgCACgFQADgGAAgGQAAgJgFgGQgGgGgJAAQgGAAgFABIgCgJIANgCQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAEQgHAFgKAAQgGAAgHgCg");
	this.shape_91.setTransform(51.6,-7.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_92.setTransform(47.4,-7.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AggAeIACgJIAGABQAFAAABgBQABgCAAgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgEACgGAAQgFAAgGgCg");
	this.shape_93.setTransform(41.8,-7.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgFgCQgFgDgJAAIgSACIgBgKQALgCAKAAQATAAAHAIQAIAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_94.setTransform(32,-7.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_95.setTransform(26.8,-9.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgaAYIARgDIgLg2IAMAAIAIAyQAKgEACgHQADgGAAgMIABgVIALAAIAAARIgBAQQgBAEgDAGQgCAGgFAEQgEAEgKAEQgIADgRADg");
	this.shape_96.setTransform(21.9,-7.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_97.setTransform(17.6,-9.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgDQABgFADgDIAEgFIADgFIABgGIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_98.setTransform(13.2,-9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_99.setTransform(9.1,-7.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIAAAJQgCADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_100.setTransform(3.5,-7.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_101.setTransform(-7,-7.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgDQABgFADgDIAEgFIADgFIABgGIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_102.setTransform(-14.1,-9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_103.setTransform(-18.2,-7.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_104.setTransform(-21,-5.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgFgFgCQgEgCgLgBIgMABIgBgJQAIgBAJgBQAQABAHAHQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_105.setTransform(206.8,-37.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgaAYIARgDIgLg2IAMAAIAIAyQAKgEADgHQACgGAAgMIABgVIALAAIgBARIgBAQQAAAEgCAGQgDAGgFAEQgEAEgKAEQgIADgSADg");
	this.shape_106.setTransform(200.1,-36.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgIAfIAAgKIgBgUIgBgFQAAgKAIgHIgQAAIAAgJIAlAAIAAAIQgJgBgFAGQgFAFAAAJIAAAFIACAVIAAAIg");
	this.shape_107.setTransform(195,-37.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgBgFgGgCQgFgCgIgBIgPABIgBgJIAQgCQATABAGAHQAIAHAAAPIAAAgg");
	this.shape_108.setTransform(189.3,-37.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AggAeIACgJIAHABQADAAACgBQACgCAAgFIAAgjIgNABIgBgJQAOgCANAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgBADgEACQgDACgHAAQgGAAgFgCg");
	this.shape_109.setTransform(182.4,-37.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgEgDQgGgCgJAAIgSACIgBgKQALgCAKAAQASABAIAHQAHAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_110.setTransform(172.5,-37.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_111.setTransform(164.7,-37.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_112.setTransform(159,-38.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgPAcQgHgEgCgHQgDgHAAgLIAAgdIALAAIAAAfQABAOAFAEQAEAFAGAAQAGAAAEgEQAFgDABgEIAAgNIAAgIQABgNgJAAQgFAAgEAFIgDgFQAGgLAJABQAIgBAFAHQAEAGAAANIAAAFQAAALgDAGQgCAHgHAFQgGAEgKABQgIgBgHgEg");
	this.shape_113.setTransform(154.1,-37.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgCgEgGgDQgFgCgJAAIgSACIAAgKQAKgCAKAAQATABAHAHQAIAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_114.setTransform(146.9,-37.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgOAfIAAgJIASAAIAAgdIgBgIQAAgDgDgBQgCgCgEAAIgGABIgBgJQAEgBAFgBQAIAAAEADQAEADABAFQACAEAAAJIAAAmg");
	this.shape_115.setTransform(138.1,-37.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_116.setTransform(134.8,-38.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AggAeIACgJIAHABQAEAAABgBQACgCAAgFIAAgjIgNABIgBgJQAOgCANAAQANAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgBADgEACQgEACgGAAQgFAAgGgCg");
	this.shape_117.setTransform(129.2,-37.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_118.setTransform(124.1,-36);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgEQABgEADgDIAEgFIADgGIABgFIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_119.setTransform(117,-38.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAPAfIgWggQgGACgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_120.setTransform(111.1,-37.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgCACgGQADgFAAgGQAAgJgFgGQgGgGgJAAQgGAAgFACIgCgKIANgCQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAEQgHAFgKAAQgGAAgHgCg");
	this.shape_121.setTransform(104.8,-37.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_122.setTransform(100.6,-37.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgEQABgEADgDIAEgFIADgGIABgFIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_123.setTransform(96.2,-38.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAPAfIgWggQgGACgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_124.setTransform(87.6,-37.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgBgFgGgCQgFgCgIgBIgPABIgBgJIAQgCQATABAGAHQAIAHAAAPIAAAgg");
	this.shape_125.setTransform(80.7,-37.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_126.setTransform(76.5,-37.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAQAfIAAggQAAgHgCgEQgBgEgFgCQgEgCgIgBIgLABIAAAzIgLAAIAAg8QAMgCALAAQAKABAHADQAHAEADAFQADAFAAAKIAAAig");
	this.shape_127.setTransform(71.4,-37.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgFgDQgFgCgJAAIgSACIgBgKQALgCAKAAQATABAHAHQAIAHgBAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_128.setTransform(64.3,-37.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgBAfIAAgJIATAAIAAgSIgBgOQAAgFgDgDQgCgDgFAAQgHAAgDAHQgFAHgDAQIgEAWIgMAAIAGgYIADgLIgKgaIALAAIAEAOQADgGAGgEQAEgEAIgBQAGAAAGAFQAFADACAHQACAHAAANIAAAbg");
	this.shape_129.setTransform(54.1,-37.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgNAIgKQAIgJAMAAQAIAAAGAEQAGADAFAHQAEAIAAAKQAAAJgDAHQgDAIgHAEQgGAFgKAAQgMAAgIgJgAgMgQQgEAHAAAJQAAALAFAGQAEAHAHAAQAJgBAEgGQAEgHAAgKQAAgKgFgHQgEgFgIAAQgIgBgEAHg");
	this.shape_130.setTransform(47.2,-37.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_131.setTransform(42.3,-37.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgKAAIAAA0g");
	this.shape_132.setTransform(37.8,-37.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgCgFgFgCQgFgCgIgBIgPABIgBgJIARgCQARABAIAHQAHAHAAAPIAAAgg");
	this.shape_133.setTransform(31.4,-37.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQACgCgBgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQAAADgEACQgDACgHAAQgGAAgFgCg");
	this.shape_134.setTransform(24.5,-37.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_135.setTransform(16.7,-37.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgFgFgCQgEgCgLgBIgMABIgBgJQAIgBAJgBQAQABAHAHQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_136.setTransform(12,-37.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgCgFgFgCQgFgCgIgBIgPABIgBgJIARgCQARABAIAHQAHAHAAAPIAAAgg");
	this.shape_137.setTransform(5.4,-37.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_138.setTransform(1.1,-38.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAPAfIgWggQgGACgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_139.setTransform(-3.6,-37.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgEgDQgGgCgJAAIgSACIgBgKQALgCAKAAQASABAIAHQAHAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_140.setTransform(-10.6,-37.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_141.setTransform(-15.6,-34.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgDgLABIgMAAIgBgJQAIgCAJABQAQAAAHAHQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_142.setTransform(206.8,-51.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_143.setTransform(202,-53.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgaAcIADgJQAGADAIAAQAJAAAIgFQAHgGAAgLQAAgKgGgGQgFgGgJAAIgJABIAAAMQAAAGAGAAIAGAAIAAAHQgCABgFAAQgIAAgEgEQgFgCAAgJIAAgSQALgDALAAQANAAAIAIQAKAIAAAPQAAAOgKAJQgJAJgQAAQgLAAgHgEg");
	this.shape_144.setTransform(197.4,-51.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_145.setTransform(192.5,-50.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgaAcIADgJQAFADAJAAQAKAAAHgFQAHgGAAgLQAAgKgGgGQgFgGgJAAIgKABIAAAMQABAGAGAAIAGAAIABAHQgDABgFAAQgIAAgEgEQgEgCgBgJIAAgSQALgDALAAQAMAAAJAIQAKAIAAAPQAAAOgKAJQgJAJgQAAQgLAAgHgEg");
	this.shape_146.setTransform(185.1,-51.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_147.setTransform(180.3,-53.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AggAeIACgJIAGABQAFAAABgBQACgCgBgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgDACgHAAQgFAAgGgCg");
	this.shape_148.setTransform(174.7,-51.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAQAgIAAghQAAgHgCgEQgBgEgFgCQgEgDgIABIgLAAIAAA0IgLAAIAAg9QAMgBALAAQAKgBAHAEQAHADADAGQADAFAAALIAAAig");
	this.shape_149.setTransform(167.5,-51.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_150.setTransform(162.4,-51.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_151.setTransform(154,-51.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_152.setTransform(148.4,-53.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgPAcQgHgEgCgHQgDgHAAgLIAAgdIAMAAIAAAfQgBAOAGAEQAFAEAFAAQAHAAADgDQAEgCACgGIABgMIAAgIQgBgOgHAAQgGABgDAFIgEgFQAFgLAKAAQAIABAEAGQAFAHAAAMIAAAFQAAAKgCAHQgDAHgGAFQgHAFgKgBQgIABgHgFg");
	this.shape_153.setTransform(143.4,-51.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgDQgDgFgFgDQgFgBgJAAIgSABIgBgKQALgBAKAAQATAAAHAHQAIAHgBAPIAAAhgAgaAgIAAgiIALAAIAAAig");
	this.shape_154.setTransform(136.3,-51.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgEQABgDADgEIAEgEIADgHIABgGIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAFQgFAGAAAHIAAAKg");
	this.shape_155.setTransform(126.9,-53.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgDQgDgFgEgDQgGgBgJAAIgSABIgBgKQALgBAKAAQASAAAIAHQAHAHAAAPIAAAhgAgaAgIAAgiIALAAIAAAig");
	this.shape_156.setTransform(120.8,-51.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgDACgFQADgEAAgHQAAgJgFgGQgGgGgJAAQgGAAgFACIgCgLIANgBQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAFQgHAEgKAAQgGAAgHgCg");
	this.shape_157.setTransform(114.3,-51.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgOAgIAAgKIASAAIAAgeIgBgHQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgEAAIgGABIgBgJQAEgCAGABQAGAAAFACQAEADACAFQABAFAAAHIAAAog");
	this.shape_158.setTransform(109.2,-51.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AggAeIACgJIAHABQADAAACgBQACgCAAgFIAAgjIgNABIgBgJQAOgCANAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgBADgEACQgDACgHAAQgGAAgFgCg");
	this.shape_159.setTransform(103.2,-51.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAPAfIgWggQgGABgBAKIgCAVIgMAAIACgVQACgOALgGIgPgUIAOAAIATAbQADgCACgCIACgKIACgNIALAAIgBANQgBAIgDAFQgDAFgHADIATAbg");
	this.shape_160.setTransform(93.6,-51.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAOAgIAAgfQAAgHgCgFQgBgEgGgDQgFgDgIABIgPAAIgBgJIAQgBQATAAAGAHQAIAHAAAPIAAAhg");
	this.shape_161.setTransform(86.8,-51.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_162.setTransform(82.5,-51.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAQAgIAAghQAAgHgCgEQgBgEgFgCQgEgDgIABIgLAAIAAA0IgLAAIAAg9QAMgBALAAQAKgBAHAEQAHADADAGQADAFAAALIAAAig");
	this.shape_163.setTransform(77.5,-51.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_164.setTransform(72.4,-51.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQACgCgBgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQAAADgEACQgDACgHAAQgGAAgFgCg");
	this.shape_165.setTransform(66.8,-51.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgDgLABIgMAAIgBgJQAIgCAJABQAQAAAHAHQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_166.setTransform(57.2,-51.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgVAfIAAgKIAeAAIghgzIANAAIAQAbQAEgDACgDQACgEAAgHIABgKIALAAIAAALIgCAJQgBADgDAEQgDADgHADIAOAWIAAAGg");
	this.shape_167.setTransform(50.8,-51.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_168.setTransform(46.7,-51.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAOAgIAAgfQAAgHgCgFQgBgEgGgDQgFgDgIABIgPAAIgBgJIAQgBQATAAAGAHQAIAHAAAPIAAAhg");
	this.shape_169.setTransform(41.9,-51.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgDQgDgFgEgDQgGgBgJAAIgSABIgBgKQALgBAKAAQASAAAIAHQAHAHAAAPIAAAhgAgaAgIAAgiIALAAIAAAig");
	this.shape_170.setTransform(35.6,-51.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgCAgIAAgKIAVAAIAAgSIgBgOQgBgFgDgDQgDgDgEAAQgGAAgEAHQgFAHgDAPIgEAYIgLAAIAEgZIAEgKIgLgaIAMAAIAEANQADgGAGgEQAEgFAIABQAGAAAGADQAFAEADAHQABAHABANIAAAcg");
	this.shape_171.setTransform(25.4,-51.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMAAQAIAAAGAEQAHADAEAIQAEAHAAAKQAAAJgDAIQgEAHgGAEQgHAFgJAAQgMAAgIgJgAgMgQQgEAHAAAJQAAALAEAHQAFAFAHAAQAIABAFgHQAEgHAAgKQAAgKgFgGQgEgHgIAAQgIABgEAGg");
	this.shape_172.setTransform(18.6,-51.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_173.setTransform(13.6,-51.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgKAAIAAA0g");
	this.shape_174.setTransform(9.1,-51.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAOAgIAAgfQAAgHgCgFQgCgEgFgDQgFgDgIABIgPAAIgBgJIARgBQASAAAGAHQAIAHAAAPIAAAhg");
	this.shape_175.setTransform(2.7,-51.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_176.setTransform(-4.2,-51.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgdAgIAAgKIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgDgLABIgMAAIgBgJQAIgCAJABQAQAAAHAHQAIAHAAAPIAAAXIAKAAIAAAKg");
	this.shape_177.setTransform(-13.7,-51.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AggAeIACgJIAHABQAEAAABgBQACgCAAgFIAAgjIgNABIgBgJQAOgCANAAQANAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgBADgEACQgEACgGAAQgFAAgGgCg");
	this.shape_178.setTransform(-21.1,-51.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_179.setTransform(-26.2,-51.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAOArIAAg1QAAgKgDgEQgCgFgGgCQgEgBgHAAIgPAAIgBgJIAQgBQARgBAIAIQAIAGAAAQIAAA4g");
	this.shape_180.setTransform(-31,-50.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgYArIAAg6IALAAIAAA6gAABATIAAgJIABgKQABgDAEgEIADgEIADgHIABgHIAAgIIgmAAIAAgJIAxAAIAAAPIgBALIgEAIIgDAFQgFAFAAAHIAAAKg");
	this.shape_181.setTransform(-39.7,-50.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_182.setTransform(-44.6,-51.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgaAcIADgJQAGADAIAAQAJAAAIgFQAHgGAAgLQAAgKgGgGQgFgGgJAAIgJABIAAAMQAAAGAGAAIAGAAIAAAHQgCABgFAAQgIAAgEgEQgFgCAAgJIAAgSQALgDALAAQANAAAIAIQAKAIAAAPQAAAOgKAJQgJAJgQAAQgLAAgHgEg");
	this.shape_183.setTransform(-49.2,-51.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMAAQAIAAAGAEQAGADAFAIQAEAHAAAKQAAAJgDAIQgEAHgGAEQgGAFgKAAQgMAAgIgJgAgMgQQgEAHAAAJQAAALAEAHQAFAFAHAAQAIABAFgHQAEgHAAgKQAAgKgFgGQgEgHgIAAQgHABgFAGg");
	this.shape_184.setTransform(-56,-51.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAPAfIgWggQgGABgBAKIgCAVIgMAAIACgVQACgOALgGIgPgUIAOAAIATAbQADgCACgCIACgKIACgNIALAAIgBANQgBAIgDAFQgDAFgHADIATAbg");
	this.shape_185.setTransform(-62.7,-51.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_186.setTransform(-67.7,-51.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AggAeIACgJIAHABQAEAAABgBQACgCAAgFIAAgjIgNABIgBgJQAOgCANAAQANAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgBADgEACQgEACgGAAQgFAAgGgCg");
	this.shape_187.setTransform(-73.3,-51.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_188.setTransform(-78.2,-49.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_189.setTransform(205.8,-66.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYArIAAg6IALAAIAAA6gAABATIAAgJIABgJQABgDAEgFIADgFIADgFIABgIIAAgIIgmAAIAAgJIAxAAIAAAQIgBAKIgEAIIgDAEQgFAGAAAHIAAAKg");
	this.shape_190.setTransform(198.5,-65.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgFADgDIAEgFIADgFIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_191.setTransform(192.1,-67.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgFADgDIAEgFIADgFIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_192.setTransform(183.8,-67.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgYArIAAg6IALAAIAAA6gAABATIAAgJIABgJQABgDAEgFIADgFIADgFIABgIIAAgIIgmAAIAAgJIAxAAIAAAQIgBAKIgEAIIgDAEQgFAGAAAHIAAAKg");
	this.shape_193.setTransform(178,-65.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAQAfIAAggQAAgHgCgEQgBgEgFgCQgEgCgIAAIgLAAIAAAzIgLAAIAAg7QAMgCALgBQAKAAAHAEQAHAEADAFQADAGAAAKIAAAhg");
	this.shape_194.setTransform(171,-66.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AggAeIACgJIAHABQAEAAABgBQABgCAAgFIAAgjIgMABIgBgJQANgCAOAAQANAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgBgFQgCgEgFgCQgEgDgKAAIgFAAIAAAlIgBAJQgCADgDACQgEACgGAAQgFAAgGgCg");
	this.shape_195.setTransform(163.3,-66.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_196.setTransform(155.5,-66.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgFADgDIAEgFIADgFIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_197.setTransform(151.1,-67.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAPAfIgWghQgGACgBAKIgCAVIgMAAIACgVQACgPALgFIgPgUIAOAAIATAbQADgBACgDIACgLIACgMIALAAIgBAMQgBAJgDAFQgDAEgHAEIATAbg");
	this.shape_198.setTransform(145.2,-66.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgDACgEQADgGAAgGQAAgJgFgGQgGgGgJAAQgGAAgFABIgCgKIANgBQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAFQgHAEgKAAQgGAAgHgCg");
	this.shape_199.setTransform(138.9,-66.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_200.setTransform(134.7,-66.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgFADgDIAEgFIADgFIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_201.setTransform(130.3,-67.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgEgFgDQgEgCgLAAIgMAAIgBgJQAIgCAJAAQAQAAAHAIQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_202.setTransform(121.7,-66.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgDACgEQADgGAAgGQAAgJgFgGQgGgGgJAAQgGAAgFABIgCgKIANgBQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAFQgHAEgKAAQgGAAgHgCg");
	this.shape_203.setTransform(115.6,-66.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgDQABgFADgDIAEgFIADgFIABgHIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAQIgBAJIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_204.setTransform(109.9,-67.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgBAfIAAgJIATAAIAAgSIAAgOQgBgFgDgDQgCgDgFAAQgHAAgDAHQgFAHgDAQIgEAWIgLAAIAEgYIAEgLIgKgZIALAAIAEANQADgGAGgEQAEgFAIAAQAGABAGAEQAFADADAHQABAHAAANIAAAbg");
	this.shape_205.setTransform(100.8,-66.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgYArIAAg6IALAAIAAA6gAABATIAAgJIABgJQABgDAEgFIADgFIADgFIABgIIAAgIIgmAAIAAgJIAxAAIAAAQIgBAKIgEAIIgDAEQgFAGAAAHIAAAKg");
	this.shape_206.setTransform(94.2,-65.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_207.setTransform(89.3,-66.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgaAfIAAg7QAMgCALgBQAKAAAHAEQAHAEADAFQADAGAAAKIAAAhgAgPgUIAAAqIAfAAIAAgXQAAgHgCgEQgBgEgFgCQgEgCgIAAIgLAAg");
	this.shape_208.setTransform(84.2,-66.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_209.setTransform(79.3,-64.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgaAcIADgKQAGAEAIAAQAJAAAIgGQAHgFAAgLQAAgKgGgGQgFgGgJAAIgJABIAAALQAAAIAGAAIAGgBIABAHQgDABgFABQgIAAgEgFQgFgCAAgJIAAgSQALgDALAAQANAAAIAIQAKAIAAAPQAAAOgKAJQgJAJgQAAQgLAAgHgEg");
	this.shape_210.setTransform(206.8,-81.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgCgFgFgCQgFgCgIgBIgPABIgBgJIARgCQARABAIAHQAHAHAAAPIAAAgg");
	this.shape_211.setTransform(200.1,-81.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_212.setTransform(195.9,-81.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgTAbQgIgGgDgJQgEgKAAgQIgBgRIALAAIABAKIABAVQAGAAAFgCQAFgEAAgIIABgRIALAAIgCAUIgBAHIgDAFQgBADgFACQgGACgIABQABAGAGAEQAFADAIAAQAGAAAFgDQAFgDADgGQACgFABgJIACgbIAMAAIgCAXQgCAMgDAJQgDAIgIAGQgIAFgLAAQgLAAgHgFg");
	this.shape_213.setTransform(190.2,-81.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgCgEgGgDQgFgCgJAAIgSACIAAgKQAKgCAKAAQATABAHAHQAIAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_214.setTransform(179.8,-81.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgBAfIAAgJIATAAIAAgSIAAgOQgBgFgDgDQgCgDgFAAQgHAAgDAHQgFAHgDAQIgEAWIgLAAIAEgYIAEgLIgKgaIALAAIAEAOQADgGAGgEQAEgEAIgBQAGAAAGAFQAFADADAHQABAHAAANIAAAbg");
	this.shape_215.setTransform(172.3,-81.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_216.setTransform(167.4,-82.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgEQABgEADgDIAEgFIADgGIABgFIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_217.setTransform(163,-82.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgEgDQgGgCgJAAIgSACIgBgKQALgCAKAAQASABAIAHQAIAHgBAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_218.setTransform(156.9,-81.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAFAPIgCgPIAAgOIAKAAIAAAOIgCAPgAgJAPIgDgPIAAgOIAKAAIAAAOIgDAPg");
	this.shape_219.setTransform(148.7,-85.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgFgFgCQgEgCgLgBIgMABIgBgJQAIgBAJgBQAQABAHAHQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_220.setTransform(143.7,-81.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgOAfIAAgJIASAAIAAgdIgBgIQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgEAAIgGABIgBgJQAEgBAGgBQAGAAAFADQAEADACAFQABAEAAAJIAAAmg");
	this.shape_221.setTransform(138.1,-81.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgPAcQgHgEgCgHQgDgHAAgLIAAgdIALAAIAAAfQAAAOAGAEQAFAFAFAAQAHAAADgEQAEgDACgEIABgNIAAgIQgBgNgHAAQgGAAgDAFIgEgFQAFgLAKABQAIgBAFAHQAEAGAAANIAAAFQAAALgCAGQgDAHgGAFQgHAEgKABQgIgBgHgEg");
	this.shape_222.setTransform(132.7,-81.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_223.setTransform(127.6,-81.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAFAPIgCgPIAAgOIAKAAIAAAOIgCAPgAgJAPIgDgPIAAgOIAKAAIAAAOIgDAPg");
	this.shape_224.setTransform(124.4,-85.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgdAfIAAgJIAmAAIAAgVQAAgIgCgEQgCgFgFgCQgEgCgLgBIgMABIgBgJQAIgBAJgBQAQABAHAHQAIAHAAAPIAAAXIAKAAIAAAJg");
	this.shape_225.setTransform(116.7,-81.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_226.setTransform(111.9,-82.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgaAcIADgKQAFAEAJAAQAKAAAHgGQAHgFAAgLQAAgKgGgGQgFgGgJAAIgKABIAAALQABAIAGAAIAGgBIABAHQgDABgFABQgIAAgEgFQgEgCgBgJIAAgSQALgDALAAQAMAAAJAIQAKAIAAAPQAAAOgKAJQgJAJgQAAQgLAAgHgEg");
	this.shape_227.setTransform(107.3,-81.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgOAfIAAgJIASAAIAAgdIgBgIQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgFAAIgGABIgBgJQAEgBAGgBQAGAAAFADQAEADACAFQABAEAAAJIAAAmg");
	this.shape_228.setTransform(101.5,-81.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_229.setTransform(98.2,-82.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_230.setTransform(92.6,-81.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgFgDQgFgCgJAAIgSACIgBgKQALgCAKAAQATABAHAHQAIAHgBAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_231.setTransform(82.7,-81.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_232.setTransform(77.6,-82.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAPAfIgWggQgGACgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_233.setTransform(72.9,-81.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAFAPIgCgPIAAgOIAKAAIAAAOIgDAPgAgJAPIgDgPIAAgOIAKAAIAAAOIgDAPg");
	this.shape_234.setTransform(64.9,-85.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgPAcQgGgEgDgHQgDgHAAgLIAAgdIAMAAIAAAfQAAAOAEAEQAGAFAFAAQAHAAAEgEQADgDABgEIACgNIAAgIQgBgNgHAAQgGAAgDAFIgEgFQAGgLAJABQAJgBADAHQAFAGAAANIAAAFQAAALgCAGQgDAHgGAFQgHAEgKABQgIgBgHgEg");
	this.shape_235.setTransform(59.6,-81.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_236.setTransform(54.5,-82.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_237.setTransform(51.6,-82.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgYArIAAg6IALAAIAAA6gAABATIAAgIIABgKQABgEAEgEIADgFIADgGIABgGIAAgJIgmAAIAAgJIAxAAIAAAPIgBALIgEAIIgDAEQgFAGAAAHIAAAKg");
	this.shape_238.setTransform(46.9,-80.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAPAfIgWggQgGACgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_239.setTransform(37.5,-81.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_240.setTransform(32.5,-81.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_241.setTransform(29.6,-81.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_242.setTransform(26.6,-82.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAFAPIgCgPIAAgOIAKAAIAAAOIgCAPgAgKAPIgCgPIAAgOIAKAAIAAAOIgCAPg");
	this.shape_243.setTransform(23.4,-85.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgEAKIAEgEIAAgIIgEAAIAAgLIAJAAIAAALQAAAHgCADQgCAFgDABg");
	this.shape_244.setTransform(20.3,-77.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgWAeIACgKQAFACAGAAQAHAAADgDQAFgCACgGQADgFAAgGQAAgJgFgGQgGgGgJAAQgGAAgFACIgCgKIANgCQAOAAAJAJQAJAJAAANQAAAJgEAHQgEAHgHAEQgHAFgKAAQgGAAgHgCg");
	this.shape_245.setTransform(13.3,-81.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgBArIAAgIQAAgIABgEQABgEADgDIAEgFIADgGIABgFIAAgJIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAEQgFAHAAAHIAAAKg");
	this.shape_246.setTransform(7.7,-82.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_247.setTransform(3.6,-81.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgCAfIAAgJIAVAAIAAgSIgBgOQgBgFgDgDQgDgDgEAAQgHAAgDAHQgFAHgDAQIgEAWIgLAAIAEgYIADgLIgKgaIAMAAIAEAOQADgGAGgEQAFgEAGgBQAIAAAFAFQAFADADAHQACAHAAANIAAAbg");
	this.shape_248.setTransform(-1.7,-81.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgCgFgFgCQgFgCgIgBIgPABIgBgJIARgCQARABAIAHQAHAHAAAPIAAAgg");
	this.shape_249.setTransform(-8.4,-81.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAPAfIgWggQgGACgBAIIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_250.setTransform(-17.2,-81.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAOAfIAAgeQAAgHgCgFQgBgFgGgCQgFgCgIgBIgPABIgBgJIAQgCQATABAGAHQAIAHAAAPIAAAgg");
	this.shape_251.setTransform(-24,-81.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_252.setTransform(-28.3,-81.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAQAfIAAggQAAgHgCgEQgBgEgFgCQgEgCgIgBIgLABIAAAzIgLAAIAAg8QAMgCALAAQAKABAHADQAHAEADAFQADAFAAAKIAAAig");
	this.shape_253.setTransform(-33.3,-81.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AAQAfIAAgeQAAgIgCgFQgDgEgFgDQgFgCgJAAIgSACIgBgKQALgCAKAAQATABAHAHQAIAHAAAPIAAAggAgaAfIAAgiIALAAIAAAig");
	this.shape_254.setTransform(-40.5,-81.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgEA/IAAgTIAoAAIAAgkIgBgdQgCgKgFgGQgFgGgJAAQgNAAgJAOQgIANgHAhIgJAuIgXAAIAKgxIAGgXIgTg0IAWAAIAJAcQAFgMAMgJQALgIANAAQAOAAALAHQALAIAEAOQAFAOAAAbIAAA3g");
	this.shape_255.setTransform(202.4,-111.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAhA/IAAg9QAAgSgFgJQgEgJgKgEQgLgFgUAAQgQAAgTAEIgCgTQAVgEAVAAQAlAAAPAOQAPAPAAAeIAABCgAg1A/IAAhFIAXAAIAABFg");
	this.shape_256.setTransform(188.4,-111.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgSA+IAAgUQAAgNgCgZIgBgOQAAgTAQgNIggAAIAAgTIBLAAIAAAQQgSAAgKAKQgKAKAAARIABANQADAcAAAMIAAARg");
	this.shape_257.setTransform(171.3,-111.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAhA/IAAg9QgBgSgEgJQgEgJgLgEQgKgFgUAAQgPAAgUAEIgCgTQAWgEATAAQAmAAAPAOQAPAPAAAeIAABCgAg1A/IAAhFIAXAAIAABFg");
	this.shape_258.setTransform(159.3,-111.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AALAeIgFgfIAAgcIAUAAIAAAcIgFAfgAgUAeIgFgfIAAgcIAUAAIAAAcIgEAfg");
	this.shape_259.setTransform(143,-119.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("Ag6A/IAAgTIBLAAIAAgqQAAgRgDgIQgEgJgKgFQgKgGgVAAIgYACIgCgSQAQgDASAAQAhAAAOAPQAPAOABAeIAAAvIAUAAIAAATg");
	this.shape_260.setTransform(133.1,-111.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgdA/IAAgTIAlAAIAAg8QAAgKgCgFQgCgFgEgEQgFgDgIAAIgMABIgCgRQAIgDALAAQAPAAAJAGQAIAGADAJQADAIAAAQIAABQg");
	this.shape_261.setTransform(121.8,-111.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgfA4QgNgJgFgNQgFgOgBgXIAAg7IAXAAIAABAQAAAcAKAIQAKAJAMAAQANAAAIgGQAIgGACgKQACgKAAgQIAAgQQAAgbgQAAQgKAAgJAMIgHgLQAMgVATAAQARAAAIANQAJANAAAYIAAAJQAAAYgFANQgFAOgNAJQgNAKgUAAQgRAAgOgJg");
	this.shape_262.setTransform(111.2,-111.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_263.setTransform(101,-111.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("Ag7A/IAAgTIBMAAIAAgqQAAgRgEgIQgEgJgJgFQgKgGgWAAIgXACIgCgSQAQgDASAAQAgAAAPAPQAQAOgBAeIAAAvIAUAAIAAATg");
	this.shape_264.setTransform(86.2,-111.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_265.setTransform(76.7,-111.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgwBWIAAh1IAWAAIAAB1gAACAmIAAgRQAAgMACgIQACgHAHgJIAHgJQAFgHACgFQACgFAAgJIAAgQIhPAAIAAgTIBlAAIAAAfQAAANgDAIQgCAIgGAJIgGAIQgKAMAAAOIAAAUg");
	this.shape_266.setTransform(67.3,-108.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgqAwQgPgSAAgeQAAgdAPgSQARgRAZgBQAPABANAGQANAHAJAPQAIAPABAVQgBATgGAOQgHAPgNAJQgOAIgSABQgZAAgRgSgAgZghQgIAOAAATQAAAWAJAMQAJANAPAAQARAAAJgOQAIgNAAgUQAAgWgJgMQgJgNgQAAQgQAAgJAOg");
	this.shape_267.setTransform(53.6,-111.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AALAeIgFgfIAAgcIAUAAIAAAcIgFAfgAgUAeIgFgfIAAgcIAUAAIAAAcIgEAfg");
	this.shape_268.setTransform(43.2,-119.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgJBXIAAgYIATAAIAAAYgAgIAtIAAgGQAAgRAGgMQACgIANgNQAJgJADgGQACgFAAgHQABgNgJgJQgIgJgKAAQgLAAgHAIQgHAJgDASIgRgDQACgZAMgMQANgMASAAQASAAAOANQANANAAAUQgBAMgEAJQgEAJgNANQgLAMgCAHQgDAGAAARg");
	this.shape_269.setTransform(34.2,-113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.קופסה2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-212,0,0.147,0.17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#0000CC").ss(2,1,1).p("A6l6fMA1LAAAQE8AADgDgQDgDgAAE8IAAdGQAAE9jgDfQjgDhk8AAMg1LAAAQk8AAjgjhQjgjfAAk9IAA9GQAAk8DgjgQDgjgE8AAg");
	this.shape_270.setTransform(0.5,0.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("A6lafQk8AAjgjgQjgjfAAk9IAA9GQAAk8DgjgQDgjgE8ABMA1LAAAQE8gBDgDgQDgDgAAE8IAAdGQAAE9jgDfQjgDgk8AAg");
	this.shape_271.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_271},{t:this.shape_270}]}).wait(1));

	// Layer 4
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("A2zYsMAAAgxXMAtnAAAMAAAAxXg");
	this.shape_272.setTransform(285.3,15.1,4.793,1.139);

	this.timeline.addTween(cjs.Tween.get(this.shape_272).wait(1));

}).prototype = getMCSymbolPrototype(lib.i_asberim, new cjs.Rectangle(-414.5,-170,1399.7,365.1), null);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-69,-69,2.837,2.837);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANXAAQAAFij6D7Qj7D6liAAQlhAAj7j6Qj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhg");
	this.shape.setTransform(5.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApcJdQj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6g");
	this.shape_1.setTransform(5.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("ApcJdQj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6g");
	this.shape_2.setTransform(5.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("ApcJdQj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6g");
	this.shape_3.setTransform(5.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-86.9,173,173);


(lib.hix_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.מעברירקות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mavar_helbonim = new lib.מעברחלבונים();
	this.mavar_helbonim.parent = this;
	this.mavar_helbonim.setTransform(-98.2,-93.8,0.961,0.824,0,180,0,-88.8,92.7);

	this.timeline.addTween(cjs.Tween.get(this.mavar_helbonim).wait(1));

}).prototype = getMCSymbolPrototype(lib.מעברירקות, new cjs.Rectangle(-12.9,-1229.9,1356.1,1212.5), null);


// stage content:
(lib.Bentobox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//משתנים לפחממות
		var p=0;
		var orez=0;
		var ptitim=0;
		var tpu=0;
		var pasta=0;
		this.box_orez.visible=false;
		this.box_ptitim.visible=false;
		this.box_tpu.visible=false;
		this.box_pasta.visible=false;
		//משתנים לחלבונים
		var biza=0;
		var dagim=0;
		var haze=0;
		var gvina=0;
		this.box_biza.visible=false;
		this.box_dag.visible=false;
		this.box_haze.visible=false;
		this.box_koteg.visible=false;
		//משתנים לירקות
		var zalat=0;
		var admme=0;
		var agvania=0;
		var pasteda=0;
		this.box_salat.visible=false;
		this.box_admame.visible=false;
		this.box_agvania.visible=false;
		this.box_pasteda.visible=false;
		//iלחיצה על ה
		this.i_hesberim.visible = false;
		this.hix_hesberim.visible=false;
		
		
		var i=0;
		this.i.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		if(i==0)
		{
			this.i_hesberim.visible = true;
			this.hix_hesberim.visible=true;
			i++;
		}
		else
		{
			this.i_hesberim.visible = false;
			this.hix_hesberim.visible=false;
			i--;
		}
		}
		
		this.hix_hesberim.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
		if(i==0)
		{
			this.i_hesberim.visible = true;
			this.hix_hesberim.visible=true;
		}
		else
		{
			this.i_hesberim.visible = false;
			this.hix_hesberim.visible=false;
		}
		}
		
		//הסברים על חלקים
		this.infro_pamemot.visible=false;
		this.infro_irakot.visible=false;
		this.infro_helbonim.visible=false;
		this.mavar_pamemot.alpha=1;
		
		//  הוספת ארוע מעבר עכבר פחמימות
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.mavar_pamemot.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.infro_pamemot.visible=true;
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר פחמימות
		this.mavar_pamemot.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOutHandler()
		{
		this.infro_pamemot.visible=false;
		}
		
		//  הוספת ארוע מעבר עכבר ירקות
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.mavar_yerakot.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.infro_irakot.visible=true;
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר ירקות
		this.mavar_yerakot.addEventListener("mouseout", fl_MouseOutHandler_2.bind(this));
		
		function fl_MouseOutHandler_2()
		{
		this.infro_irakot.visible=false;
		}
		
		//  הוספת ארוע מעבר עכבר חלבונים
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.mavar_helbonim.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
			this.infro_helbonim.visible=true;
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר חלבונים
		this.mavar_helbonim.addEventListener("mouseout", fl_MouseOutHandler_3.bind(this));
		
		function fl_MouseOutHandler_3()
		{
		this.infro_helbonim.visible=false;
		}
		
		//מעבר עכבר על אורז
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_orez.addEventListener("mouseover", fl_MouseOverHandler_4.bind(this));
		
		
		function fl_MouseOverHandler_4()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=0.1;
			this.klick_tapua.alpha=0.1;
			this.klick_pasta.alpha=0.1;
				this.box_orez.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר אורז
		this.klick_orez.addEventListener("mouseout", fl_MouseOutHandler_4.bind(this));
		
		function fl_MouseOutHandler_4()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
				this.box_orez.visible=false;
			}
		}
		
		//מעבר עכבר על פתיתים
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_ptitim.addEventListener("mouseover", fl_MouseOverHandler_5.bind(this));
		
		
		function fl_MouseOverHandler_5()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=0.1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=0.1;
			this.klick_pasta.alpha=0.1;
				this.box_ptitim.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר פתיתים
		this.klick_ptitim.addEventListener("mouseout", fl_MouseOutHandler_5.bind(this));
		
		function fl_MouseOutHandler_5()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
				this.box_ptitim.visible=false;
			}
		}
		
		//מעבר עכבר על תפוח אדמה
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_tapua.addEventListener("mouseover", fl_MouseOverHandler_6.bind(this));
		
		
		function fl_MouseOverHandler_6()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=0.1;
			this.klick_ptitim.alpha=0.1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=0.1;
				this.box_tpu.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר תפוח אדמה
		this.klick_tapua.addEventListener("mouseout", fl_MouseOutHandler_6.bind(this));
		
		function fl_MouseOutHandler_6()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
				this.box_tpu.visible=false;
			}
		}
		
		//מעבר עכבר על פסטה
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_pasta.addEventListener("mouseover", fl_MouseOverHandler_7.bind(this));
		
		
		function fl_MouseOverHandler_7()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=0.1;
			this.klick_ptitim.alpha=0.1;
			this.klick_tapua.alpha=0.1;
			this.klick_pasta.alpha=1;
			this.box_pasta.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר פסטה
		this.klick_pasta.addEventListener("mouseout", fl_MouseOutHandler_7.bind(this));
		
		function fl_MouseOutHandler_7()
		{
			if(orez==0&&ptitim==0&&tpu==0&&pasta==0)
			{
			this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
			this.box_pasta.visible=false;
			}
		}
		
		//מעבר עכבר על ביצה קשה
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_biza.addEventListener("mouseover", fl_MouseOverHandler_8.bind(this));
		
		
		function fl_MouseOverHandler_8()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=1;
			this.klick_dagim.alpha=0.1;
			this.klick_haze.alpha=0.1;
			this.klick_gvina.alpha=0.1;
			this.box_biza.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר ביצה קשה
		this.klick_biza.addEventListener("mouseout", fl_MouseOutHandler_8.bind(this));
		
		function fl_MouseOutHandler_8()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_biza.visible=false;
			}
		}
		
		//מעבר עכבר על דגים
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_dagim.addEventListener("mouseover", fl_MouseOverHandler_9.bind(this));
		
		
		function fl_MouseOverHandler_9()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=0.1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=0.1;
			this.klick_gvina.alpha=0.1;
			this.box_dag.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר דגים
		this.klick_dagim.addEventListener("mouseout", fl_MouseOutHandler_9.bind(this));
		
		function fl_MouseOutHandler_9()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_dag.visible=false;
			}
		}
		
		//מעבר עכבר על חזה עוף
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_haze.addEventListener("mouseover", fl_MouseOverHandler_10.bind(this));
		
		
		function fl_MouseOverHandler_10()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=0.1;
			this.klick_dagim.alpha=0.1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=0.1;
			this.box_haze.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר חזה עוף
		this.klick_haze.addEventListener("mouseout", fl_MouseOutHandler_10.bind(this));
		
		function fl_MouseOutHandler_10()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_haze.visible=false;
			}
		}
		
		//מעבר עכבר על חזה גבינת קוטג
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_gvina.addEventListener("mouseover", fl_MouseOverHandler_11.bind(this));
		
		
		function fl_MouseOverHandler_11()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=0.1;
			this.klick_dagim.alpha=0.1;
			this.klick_haze.alpha=0.1;
			this.klick_gvina.alpha=1;
			this.box_koteg.visible=true;
			}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר גבינת קוטג
		this.klick_gvina.addEventListener("mouseout", fl_MouseOutHandler_11.bind(this));
		
		function fl_MouseOutHandler_11()
		{
			if(biza==0&&dagim==0&&haze==0&&gvina==0)
			{
			this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_koteg.visible=false;
			}
		}
		
		//מעבר עכבר על חזה סלט
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_zalat.addEventListener("mouseover", fl_MouseOverHandler_12.bind(this));
		
		
		function fl_MouseOverHandler_12()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=1;
			this.klick_admame.alpha=0.1;
			this.klick_agvania.alpha=0.1;
			this.klick_pasteda.alpha=0.1;
			this.box_salat.visible=true;
		}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר סלט
		this.klick_zalat.addEventListener("mouseout", fl_MouseOutHandler_12.bind(this));
		
		function fl_MouseOutHandler_12()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_salat.visible=false;
		}
		}
		
		//מעבר עכבר על חזה אדממה
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_admame.addEventListener("mouseover", fl_MouseOverHandler_13.bind(this));
		
		
		function fl_MouseOverHandler_13()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=0.1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=0.1;
			this.klick_pasteda.alpha=0.1;
			this.box_admame.visible=true;
		}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר אדממה
		this.klick_admame.addEventListener("mouseout", fl_MouseOutHandler_13.bind(this));
		
		function fl_MouseOutHandler_13()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_admame.visible=false;
		}
		}
		
		//מעבר עכבר על חזה עגבניות שרי
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_agvania.addEventListener("mouseover", fl_MouseOverHandler_14.bind(this));
		
		
		function fl_MouseOverHandler_14()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=0.1;
			this.klick_admame.alpha=0.1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=0.1;
			this.box_agvania.visible=true;
		}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר עגבניות שרי
		this.klick_agvania.addEventListener("mouseout", fl_MouseOutHandler_14.bind(this));
		
		function fl_MouseOutHandler_14()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_agvania.visible=false;
		}
		}
		
		//מעבר עכבר על חזה פשטדת ירק
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.klick_pasteda.addEventListener("mouseover", fl_MouseOverHandler_15.bind(this));
		
		
		function fl_MouseOverHandler_15()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=0.1;
			this.klick_admame.alpha=0.1;
			this.klick_agvania.alpha=0.1;
			this.klick_pasteda.alpha=1;
			this.box_pasteda.visible=true;
		}
			console.log("in");
		}
		
		
		// הוספת ארוע יציאת עכבר פשטדת ירק
		this.klick_pasteda.addEventListener("mouseout", fl_MouseOutHandler_15.bind(this));
		
		function fl_MouseOutHandler_15()
		{
			if(zalat==0&&admme==0&&agvania==0&&pasteda==0)
		{
			this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_pasteda.visible=false;
		}
		}
		
		
		
		
		//לחיצה על אורז
		
		this.klick_orez.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			if(orez==1)
			{
		    this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
		this.box_orez.visible=false;
			orez--;
		}
		else
		{
			this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=0.1;
			this.klick_tapua.alpha=0.1;
			this.klick_pasta.alpha=0.1;
			this.box_ptitim.visible=false;
			this.box_tpu.visible=false;
			this.box_pasta.visible=false;
			this.box_orez.visible=true;
			ptitim=0;
			tpu=0;
			pasta=0;
			orez++;
		}
		}
		
		
		//לחיצה על פתיתים
		this.klick_ptitim.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
		if(ptitim==1)
			{
		    this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
				this.box_ptitim.visible=false;
			ptitim--;
		}
		else
		{
			this.klick_orez.alpha=0.1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=0.1;
			this.klick_pasta.alpha=0.1;
			orez=0;
			tpu=0;
			pasta=0;
			this.box_orez.visible=false;
			this.box_tpu.visible=false;
			this.box_pasta.visible=false;
			this.box_ptitim.visible=true;
			ptitim++;
		}
		}
		//לחיצה על תפוח אדמה
		this.klick_tapua.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
		if(tpu==1)
			{
		    this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
				this.box_tpu.visible=false;
			tpu--;
		}
		else
		{
			this.klick_orez.alpha=0.1;
			this.klick_ptitim.alpha=0.1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=0.1;
			orez=0;
			pasta=0;
			ptitim=0;
		    this.box_orez.visible=false;
			this.box_ptitim.visible=false;
			this.box_pasta.visible=false;
			this.box_tpu.visible=true;
		    tpu++;
		
		}
		}
		
		//לחיצה על פסטה
		
		this.klick_pasta.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
		if(pasta==1)
			{
		    this.klick_orez.alpha=1;
			this.klick_ptitim.alpha=1;
			this.klick_tapua.alpha=1;
			this.klick_pasta.alpha=1;
			this.box_pasta.visible=false;
			pasta--;
		}
		else
		{
			this.klick_orez.alpha=0.1;
			this.klick_ptitim.alpha=0.1;
			this.klick_tapua.alpha=0.1;
			this.klick_pasta.alpha=1;
			orez=0;
			ptitim=0;
			tpu=0;
			this.box_ptitim.visible=false;
			this.box_tpu.visible=false;
			this.box_orez.visible=false;
			this.box_pasta.visible=true;
		    pasta++;
		
		}
		}
		
		//לחיצה על ביצה קשה
		
		this.klick_biza.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
		if(biza==1)
			{
		    this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_biza.visible=false;
			biza--;
		}
		else
		{
		    this.klick_biza.alpha=1;
			this.klick_dagim.alpha=0.1;
			this.klick_haze.alpha=0.1;
			this.klick_gvina.alpha=0.1;
			
			dagim=0;
			haze=0;
			gvina=0;
			this.box_koteg.visible=false;
			this.box_haze.visible=false;
			this.box_dag.visible=false;
			this.box_biza.visible=true;
		    biza++;
		
		}
		}
		
		//לחיצה על דגים
		
		this.klick_dagim.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
		if(dagim==1)
			{
		    this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_dag.visible=false;
			dagim--;
		}
		else
		{
		    this.klick_biza.alpha=0.1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=0.1;
			this.klick_gvina.alpha=0.1;
			
			biza=0;
			haze=0;
			gvina=0;
			this.box_koteg.visible=false;
			this.box_haze.visible=false;
			this.box_biza.visible=false;
			this.box_dag.visible=true;
		    dagim++;
		
		}
		}
		
		//לחיצה על חזה עוף
		this.klick_haze.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
		if(haze==1)
			{
		    this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_haze.visible=false;
			haze--;
		}
		else
		{
		    this.klick_biza.alpha=0.1;
			this.klick_dagim.alpha=0.1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=0.1;
			
			biza=0;
			dagim=0;
			gvina=0;
			this.box_koteg.visible=false;
			this.box_biza.visible=false;
			this.box_dag.visible=false;
			this.box_haze.visible=true;
		    haze++;
		
		}
		}
		
		//לחיצה על גבינה
		
		this.klick_gvina.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
		if(gvina==1)
			{
		    this.klick_biza.alpha=1;
			this.klick_dagim.alpha=1;
			this.klick_haze.alpha=1;
			this.klick_gvina.alpha=1;
			this.box_koteg.visible=false;
			gvina--;
		}
		else
		{
		    this.klick_biza.alpha=0.1;
			this.klick_dagim.alpha=0.1;
			this.klick_haze.alpha=0.1;
			this.klick_gvina.alpha=1;
			
			biza=0;
			dagim=0;
			haze=0;
			this.box_haze.visible=false;
			this.box_dag.visible=false;
			this.box_biza.visible=false;
			this.box_koteg.visible=true;
		    gvina++;
		
		}
		}
		
		//לחיצה על סלט
		
		this.klick_zalat.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
		if(zalat==1)
			{
		    this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_salat.visible=false;
			zalat--;
		}
		else
		{
		    this.klick_zalat.alpha=1;
			this.klick_admame.alpha=0.1;
			this.klick_agvania.alpha=0.1;
			this.klick_pasteda.alpha=0.1;
			
			admme=0;
			agvania=0;
			pasteda=0;
			this.box_pasteda.visible=false;
			this.box_agvania.visible=false;
			this.box_admame.visible=false;
			this.box_salat.visible=true;
		    zalat++;
		
		}
		}
		
		//לחיצה על אדממה
		
		this.klick_admame.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
		if(admme==1)
			{
		    this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_admame.visible=false;
			admme--;
		}
		else
		{
		    this.klick_zalat.alpha=0.1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=0.1;
			this.klick_pasteda.alpha=0.1;
			
			zalat=0;
			agvania=0;
			pasteda=0;
			this.box_pasteda.visible=false;
			this.box_agvania.visible=false;
			this.box_salat.visible=false;
			this.box_admame.visible=true;
		    admme++;
		
		}
		}
		
		//לחיצה על עגבניות שרי
		
		this.klick_agvania.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13()
		{
		if(agvania==1)
			{
		    this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_agvania.visible=false;
			agvania--;
		}
		else
		{
		    this.klick_zalat.alpha=0.1;
			this.klick_admame.alpha=0.1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=0.1;
			
			zalat=0;
			admme=0;
			pasteda=0;
			
			this.box_pasteda.visible=false;
			this.box_admame.visible=false;
			this.box_salat.visible=false;
			this.box_agvania.visible=true;
		    agvania++;
		
		}
		}
		
		//לחיצה על פשטידת ירק
		
		this.klick_pasteda.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
		if(pasteda==1)
			{
		    this.klick_zalat.alpha=1;
			this.klick_admame.alpha=1;
			this.klick_agvania.alpha=1;
			this.klick_pasteda.alpha=1;
			this.box_pasteda.visible=false;
			pasteda--;
		}
		else
		{
		    this.klick_zalat.alpha=0.1;
			this.klick_admame.alpha=0.1;
			this.klick_agvania.alpha=0.1;
			this.klick_pasteda.alpha=1;
			
			zalat=0;
			admme=0;
			agvania=0;
			this.box_agvania.visible=false;
			this.box_admame.visible=false;
			this.box_salat.visible=false;
			this.box_pasteda.visible=true;
		    pasteda++;
		
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// i
	this.i = new lib.i();
	this.i.parent = this;
	this.i.setTransform(242.3,46.7,0.193,0.193,0,0,0,-63.2,0.8);
	new cjs.ButtonHelper(this.i, 0, 1, 2, false, new lib.i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.i).wait(1));

	// איקס של הסברים
	this.hix_hesberim = new lib.hix_i();
	this.hix_hesberim.parent = this;
	this.hix_hesberim.setTransform(276.1,108.6,0.782,0.782,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.hix_hesberim, 0, 1, 2, false, new lib.hix_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hix_hesberim).wait(1));

	// הסברים
	this.i_hesberim = new lib.i_asberim();
	this.i_hesberim.parent = this;
	this.i_hesberim.setTransform(495.8,263.1,1.138,1.138,0,0,0,-1.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.i_hesberim).wait(1));

	// הסבר חלבונים
	this.infro_helbonim = new lib.הסברחלבונים();
	this.infro_helbonim.parent = this;
	this.infro_helbonim.setTransform(140.6,535.6,0.527,0.527,0,0,0,-382.1,263.8);

	this.timeline.addTween(cjs.Tween.get(this.infro_helbonim).wait(1));

	// הסבר ירקות
	this.infro_irakot = new lib.הסברירקות();
	this.infro_irakot.parent = this;
	this.infro_irakot.setTransform(373.5,117,0.497,0.497,0,0,0,0.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.infro_irakot).wait(1));

	// הסבר פחמימות
	this.infro_pamemot = new lib.הסברפחמימות();
	this.infro_pamemot.parent = this;
	this.infro_pamemot.setTransform(627.8,234.9,0.501,0.501,0,0,0,0.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.infro_pamemot).wait(1));

	// פשטידת ירק
	this.box_pasteda = new lib.בקופסהפשטידתירק();
	this.box_pasteda.parent = this;
	this.box_pasteda.setTransform(366.3,227.9,1.138,1.138,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.box_pasteda).wait(1));

	// עגבניות שרי
	this.box_agvania = new lib.בקופסהעגבניותשרי();
	this.box_agvania.parent = this;
	this.box_agvania.setTransform(372.6,238.1,1.138,1.138,0,0,0,0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.box_agvania).wait(1));

	// אדממה
	this.box_admame = new lib.בקופסהאדממה();
	this.box_admame.parent = this;
	this.box_admame.setTransform(374.3,220.3,1.138,1.138,0,0,0,0.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.box_admame).wait(1));

	// סלט
	this.box_salat = new lib.בקופסהסלט();
	this.box_salat.parent = this;
	this.box_salat.setTransform(373.1,219.1,1.138,1.138,0,0,0,0.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.box_salat).wait(1));

	// קוטג
	this.box_koteg = new lib.בקופסהקוטג();
	this.box_koteg.parent = this;
	this.box_koteg.setTransform(374.3,372.2,1.138,1.138,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.box_koteg).wait(1));

	// חזה עוף
	this.box_haze = new lib.בקופסהחזהעוף();
	this.box_haze.parent = this;
	this.box_haze.setTransform(368.7,363.3,1.138,1.138);

	this.timeline.addTween(cjs.Tween.get(this.box_haze).wait(1));

	// דגים
	this.box_dag = new lib.בקופסהדגים();
	this.box_dag.parent = this;
	this.box_dag.setTransform(369.7,373.7,1.138,1.138,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.box_dag).wait(1));

	// ביצה
	this.box_biza = new lib.בקופסהביצה();
	this.box_biza.parent = this;
	this.box_biza.setTransform(371.3,372.3,1.138,1.138,0,0,0,0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.box_biza).wait(1));

	// פסטה
	this.box_pasta = new lib.בקופסהפסטה();
	this.box_pasta.parent = this;
	this.box_pasta.setTransform(582.2,304.3,1.138,1.138,0,0,0,0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.box_pasta).wait(1));

	// תפוח אדמה
	this.box_tpu = new lib.בקופסהתפוחאדמה();
	this.box_tpu.parent = this;
	this.box_tpu.setTransform(543.4,312.4,1.138,1.138,0,0,0,0.6,0.7);

	this.timeline.addTween(cjs.Tween.get(this.box_tpu).wait(1));

	// פתיתם
	this.box_ptitim = new lib.בקופסהפתיתים();
	this.box_ptitim.parent = this;
	this.box_ptitim.setTransform(579,301.2,1.138,1.138,0,0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.box_ptitim).wait(1));

	// אורז בקופסה
	this.box_orez = new lib.בקופסהאורז();
	this.box_orez.parent = this;
	this.box_orez.setTransform(581.8,301.2,1.138,1.138,0,0,0,0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.box_orez).wait(1));

	// לבן
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArbcUIAejqIVMA5IgeDpgApv77IVLhRIgIDrI1KBQg");
	this.shape.setTransform(464.8,299.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ירקות
	this.mavar_yerakot = new lib.מעברירקות();
	this.mavar_yerakot.parent = this;
	this.mavar_yerakot.setTransform(267.1,298.8,0.133,0.132,0,0,0,5.7,-8.7);

	this.mavar_helbonim = new lib.מעברחלבונים();
	this.mavar_helbonim.parent = this;
	this.mavar_helbonim.setTransform(268.2,292.7,0.129,0.114,0,0,0,22.5,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mavar_helbonim},{t:this.mavar_yerakot}]}).wait(1));

	// פחמימות
	this.mavar_pamemot = new lib.מעברפחמימות();
	this.mavar_pamemot.parent = this;
	this.mavar_pamemot.setTransform(522.9,267.1,0.223,0.221,0,0,0,-113.9,3.6);

	this.timeline.addTween(cjs.Tween.get(this.mavar_pamemot).wait(1));

	// לחצנים
	this.klick_pasteda = new lib.כפתור_פשטידתירק();
	this.klick_pasteda.parent = this;
	this.klick_pasteda.setTransform(731.5,437.4,1.138,1.138,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.klick_pasteda, 0, 1, 2, false, new lib.כפתור_פשטידתירק(), 3);

	this.klick_agvania = new lib.כפתור_עגבניותשרי();
	this.klick_agvania.parent = this;
	this.klick_agvania.setTransform(731,420.2,1.138,1.138);
	new cjs.ButtonHelper(this.klick_agvania, 0, 1, 2, false, new lib.כפתור_עגבניותשרי(), 3);

	this.klick_admame = new lib.כפתור_אדממה();
	this.klick_admame.parent = this;
	this.klick_admame.setTransform(731.1,402.7,1.138,1.138,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.klick_admame, 0, 1, 2, false, new lib.כפתור_אדממה(), 3);

	this.klick_zalat = new lib.כפתור_סלט();
	this.klick_zalat.parent = this;
	this.klick_zalat.setTransform(731.1,385,1.138,1.138,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.klick_zalat, 0, 1, 2, false, new lib.כפתור_סלט(), 3);

	this.klick_gvina = new lib.כפתור_גבינתקוטג();
	this.klick_gvina.parent = this;
	this.klick_gvina.setTransform(731.1,315.8,1.138,1.138,0,0,0,0.1,-9.4);
	new cjs.ButtonHelper(this.klick_gvina, 0, 1, 2, false, new lib.כפתור_גבינתקוטג(), 3);

	this.klick_haze = new lib.כפתור_חזהעוף();
	this.klick_haze.parent = this;
	this.klick_haze.setTransform(731.1,298.6,1.138,1.138,0,0,0,0.1,-9.5);
	new cjs.ButtonHelper(this.klick_haze, 0, 1, 2, false, new lib.כפתור_חזהעוף(), 3);

	this.klick_dagim = new lib.כפתור_דגים();
	this.klick_dagim.parent = this;
	this.klick_dagim.setTransform(732.1,291.1,1.138,1.138,0,0,0,0.6,-1);
	new cjs.ButtonHelper(this.klick_dagim, 0, 1, 2, false, new lib.כפתור_דגים(), 3);

	this.klick_biza = new lib.כפתור_ביצהקשה();
	this.klick_biza.parent = this;
	this.klick_biza.setTransform(731.1,264.3,1.138,1.138,0,0,0,0.1,-9.4);
	new cjs.ButtonHelper(this.klick_biza, 0, 1, 2, false, new lib.כפתור_ביצהקשה(), 3);

	this.klick_pasta = new lib.כפתור_פסטה();
	this.klick_pasta.parent = this;
	this.klick_pasta.setTransform(730.1,214.7,1.138,1.138,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.klick_pasta, 0, 1, 2, false, new lib.כפתור_פסטה(), 3);

	this.klick_tapua = new lib.כפתור_תפוחיאדמה();
	this.klick_tapua.parent = this;
	this.klick_tapua.setTransform(730.1,196.2,1.138,1.138,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.klick_tapua, 0, 1, 2, false, new lib.כפתור_תפוחיאדמה(), 3);

	this.klick_ptitim = new lib.כפתור_פתיתים();
	this.klick_ptitim.parent = this;
	this.klick_ptitim.setTransform(729.5,177.8,1.138,1.138,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.klick_ptitim, 0, 1, 2, false, new lib.כפתור_פתיתים(), 3);

	this.klick_orez = new lib.כפתור_אורז();
	this.klick_orez.parent = this;
	this.klick_orez.setTransform(729.5,159.3,1.138,1.138,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.klick_orez, 0, 1, 2, false, new lib.כפתור_אורז(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.klick_orez},{t:this.klick_ptitim},{t:this.klick_tapua},{t:this.klick_pasta},{t:this.klick_biza},{t:this.klick_dagim},{t:this.klick_haze},{t:this.klick_gvina},{t:this.klick_zalat},{t:this.klick_admame},{t:this.klick_agvania},{t:this.klick_pasteda}]}).wait(1));

	// כותרות
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_1.setTransform(757.9,362.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AASAqIAAgpQAAgKgCgGQgCgGgHgDQgHgEgLAAIgUACIgBgNIAVgCQAYAAALAKQAKAKgBATIAAAsg");
	this.shape_2.setTransform(751.4,364.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgLQAAgJACgGQABgEAFgFIAFgHIAEgIQABgDAAgGIAAgLIg0AAIAAgMIBDAAIAAAUQAAAJgCAGQgBAFgFAGIgEAFQgGAIAAAJIAAAOg");
	this.shape_3.setTransform(743.5,366.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgGApIAAhRIANAAIAABRg");
	this.shape_4.setTransform(737,364.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgrAoIACgMQAFACAEAAQAGAAACgDQACgCAAgGIAAgvIgQABIgCgLQASgDASAAQARAAALADQAJADAGAIQAFAJAAAQIAAAsIgPAAIAAgpQAAgLgCgGQgBgGgHgDQgGgDgNgBIgIABIAAAxIgBAMQgBAEgFADQgFACgIAAQgIAAgHgCg");
	this.shape_5.setTransform(729.5,364.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgDQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEAEAIQADAHAAAOIAAAtg");
	this.shape_6.setTransform(758.5,255.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgBA5IAAgLQAAgKABgFQACgFAEgFIAEgGQAEgFABgDIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAFQgGAJAAAKIAAANg");
	this.shape_7.setTransform(749.8,253.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgmAqIAAgNIAxAAIAAgcQABgKgDgGQgDgGgGgDQgGgEgOAAIgQABIgBgMQAKgCAMAAQAVAAAKAKQAKAKAAATIAAAfIANAAIAAANg");
	this.shape_8.setTransform(742,255.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgGApIAAhRIANAAIAABRg");
	this.shape_9.setTransform(735.7,255.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgTAqIAAgNIAYAAIAAgnIgBgKQgBgEgDgCQgDgCgFAAIgJABIgBgMQAFgCAIAAQAKAAAFAEQAGAEACAGQACAGAAAKIAAA1g");
	this.shape_10.setTransform(730.5,255.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgHAVIAAgpIAOAAIAAApg");
	this.shape_11.setTransform(726.1,253.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgjAqIAAhQQARgDANAAQAPAAAJAFQAJAEAEAIQAEAHAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgFQgCgGgGgDQgGgDgLAAIgOABg");
	this.shape_12.setTransform(719.4,255.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgiAlIADgMQAHAFAMAAQAMAAALgHQAJgJAAgOQAAgNgIgIQgHgIgMAAIgNABIAAAQQAAAJAKAAIAGgBIACAKQgFABgGABQgKAAgGgGQgFgEAAgLIAAgYQANgFAPAAQASAAALALQANALAAAUQAAATgNAMQgMAMgWAAQgPgBgIgFg");
	this.shape_13.setTransform(762.4,139.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgDQgGgDgKAAIgPABIAABFIgPAAIAAhQQAQgDAPAAQAOAAAJAFQAKAEAEAIQADAHAAAOIAAAtg");
	this.shape_14.setTransform(753.2,139.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgCAqIAAgNIAaAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgIAAgFAJQgGAJgFAVIgGAfIgPAAIAHggIAEgPIgNgjIAPAAIAGASQADgIAIgFQAHgGAJAAQAJAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_15.setTransform(743.4,139.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgGAVIAAgpIAOAAIAAApg");
	this.shape_16.setTransform(736.9,137.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgCAqIAAgNIAaAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgIAAgFAJQgGAJgFAVIgGAfIgPAAIAHggIAEgPIgNgjIAPAAIAGASQADgIAIgFQAHgGAJAAQAJAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_17.setTransform(729.9,139.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgGApIAAhRIAOAAIAABRg");
	this.shape_18.setTransform(723.4,139.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgrAnIADgLQADACAGAAQAFAAACgDQACgCAAgGIAAgvIgRABIgBgLQASgDASAAQASAAAKADQAKADAFAIQAFAJAAAQIAAAsIgPAAIAAgpQAAgLgCgGQgCgGgFgDQgHgEgNABIgIAAIAAAxIgBAMQgBAEgEACQgGADgJAAQgGAAgIgDg");
	this.shape_19.setTransform(715.9,139.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// כותרת
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033FF").s().p("AgjAgQAOgCAIgDIgNhHIAPAAIALBDQAOgGADgJQADgJAAgOIABgdIAPAAIgBAWIgBAWQgBAFgEAIQgDAIgGAFQgHAGgMAEQgLAGgXADg");
	this.shape_20.setTransform(651.1,103);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0033FF").s().p("AgmAqIAAgNIAxAAIAAgcQABgKgDgGQgDgGgGgDQgGgEgOAAIgQABIgBgMQAKgCAMAAQAVAAAKAKQAKAKAAATIAAAfIANAAIAAANg");
	this.shape_21.setTransform(643,102.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0033FF").s().p("AATAqIAAgpQAAgKgDgGQgCgGgHgDQgHgEgLAAIgUACIgBgNIAVgCQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_22.setTransform(634.2,102.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0033FF").s().p("AgGApIAAhRIANAAIAABRg");
	this.shape_23.setTransform(628.6,102.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0033FF").s().p("AgjAgQAOgCAIgDIgNhHIAPAAIALBDQANgGADgJQAEgJAAgOIABgdIAPAAIgBAWIgCAWQAAAFgDAIQgDAIgHAFQgGAGgMAEQgMAGgXADg");
	this.shape_24.setTransform(617.5,103);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_25.setTransform(609.8,101);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAJgBAUIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_26.setTransform(597.1,102.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033FF").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgDQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEAEAIQADAHAAAOIAAAtg");
	this.shape_27.setTransform(587.5,102.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_28.setTransform(578.8,101);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033FF").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgMQAAgIACgFQABgFAFgFIAFgGIAEgJQABgDAAgGIAAgKIg0AAIAAgNIBDAAIAAAVQAAAIgCAFQgBAGgFAFIgEAGQgGAHAAAKIAAAOg");
	this.shape_29.setTransform(571.1,104.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033FF").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_30.setTransform(564.6,100.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033FF").s().p("AgjAqIAAhQQARgDANAAQAPAAAJAFQAJAEAEAIQAEAHAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgFQgCgGgGgDQgGgDgLAAIgOABg");
	this.shape_31.setTransform(557.9,102.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033FF").s().p("AgnAqIAAgNIAyAAIAAgcQABgKgDgGQgDgGgGgDQgGgEgPAAIgPABIgBgMQAKgCAMAAQAVAAAKAKQAKAKAAATIAAAfIANAAIAAANg");
	this.shape_32.setTransform(544.4,102.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033FF").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgMQAAgIACgFQABgFAFgFIAFgGIAEgJQABgDAAgGIAAgKIg0AAIAAgNIBDAAIAAAVQAAAIgCAFQgBAGgFAFIgEAGQgGAHAAAKIAAAOg");
	this.shape_33.setTransform(535.7,104.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033FF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_34.setTransform(529.3,102.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033FF").s().p("AgjAlIAEgMQAIAFAMAAQAMAAAJgIQAKgHAAgPQAAgNgHgIQgIgIgMAAIgMABIAAAPQAAAKAJAAIAHgBIABAKQgFABgFABQgLAAgFgGQgGgEAAgLIAAgYQAOgFAOAAQARAAANALQAMALgBAUQAAATgMAMQgNAMgUAAQgQAAgJgGg");
	this.shape_35.setTransform(523.1,102.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0033FF").s().p("AgbAgQgLgMAAgUQAAgSALgMQAKgNARAAQAKAAAJAFQAIAFAGAKQAGAJAAAOQAAANgFAJQgEAKgJAGQgJAGgMAAQgRAAgKgMgAgQgVQgFAJAAAMQAAAPAFAIQAGAIAKAAQAMAAAFgJQAGgIAAgOQAAgOgGgIQgGgIgLAAQgKAAgGAJg");
	this.shape_36.setTransform(514,102.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0033FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgMAAQgLAAgNACIgCgMQAPgDANAAQAZAAAKAKQAJAJAAAUIAAAsgAgjAqIAAguIAQAAIAAAug");
	this.shape_37.setTransform(504.6,102.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0033FF").s().p("AgdAoIACgNQAHADAIgBQAJABAFgEQAGgEADgGQADgHAAgJQAAgLgHgJQgHgIgMAAQgIAAgHADIgCgOQAJgCAHgBQAUABAMAMQALALAAASQAAANgFAIQgFAKgJAGQgKAGgOAAQgHAAgJgDg");
	this.shape_38.setTransform(491.7,102.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0033FF").s().p("AAIApIAAhFIgsAAIAAgMIBJAAIAAAMIgOAAIAABFg");
	this.shape_39.setTransform(484,102.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0033FF").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_40.setTransform(478,100.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_41.setTransform(467.7,101);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0033FF").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgMQAAgIACgFQABgFAFgFIAFgGIAEgJQABgDAAgGIAAgKIg0AAIAAgNIBDAAIAAAVQAAAIgCAFQgBAGgFAFIgEAGQgGAHAAAKIAAAOg");
	this.shape_42.setTransform(459.9,104.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0033FF").s().p("AgnAqIAAgNIAyAAIAAgcQAAgKgCgGQgDgGgGgDQgGgEgPAAIgPABIgCgMQALgCAMAAQAVAAAKAKQAKAKAAATIAAAfIANAAIAAANg");
	this.shape_43.setTransform(451.1,102.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_44.setTransform(442.8,101);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0033FF").s().p("AgCAqIAAgNIAaAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgIAAgFAJQgGAJgFAVIgGAfIgPAAIAHggIAEgPIgNgjIAPAAIAGASQADgIAIgFQAHgGAJAAQAJAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_45.setTransform(429.9,102.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0033FF").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_46.setTransform(423.4,100.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0033FF").s().p("AAIApIAAhFIgsAAIAAgMIBJAAIAAAMIgOAAIAABFg");
	this.shape_47.setTransform(417.4,102.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0033FF").s().p("AgjAgQAOgCAJgDIgPhHIAQAAIALBDQAOgGACgJQAEgJAAgOIABgdIAPAAIgBAWIgBAWQgBAFgEAIQgDAIgGAFQgHAGgMAEQgLAGgXADg");
	this.shape_48.setTransform(408.8,103);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0033FF").s().p("AgjAgQAOgCAJgDIgPhHIAQAAIALBDQAOgGACgJQAEgJAAgOIABgdIAPAAIgBAWIgCAWQAAAFgDAIQgEAIgGAFQgHAGgLAEQgMAGgXADg");
	this.shape_49.setTransform(395.9,103);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_50.setTransform(388.2,101);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0033FF").s().p("AgdAoIACgNQAHADAIgBQAJABAFgEQAGgEADgGQADgHAAgJQAAgLgHgJQgHgIgMAAQgIAAgHADIgCgOQAJgCAHgBQAUABAMAMQALALAAASQAAANgFAIQgFAKgJAGQgKAGgOAAQgHAAgJgDg");
	this.shape_51.setTransform(376.5,102.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_52.setTransform(369,101);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0033FF").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgDQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEADAIQAEAHAAAOIAAAtg");
	this.shape_53.setTransform(356.3,102.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAgIAsAAIAAAUQAAAHgBAGQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_54.setTransform(347.6,101);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0033FF").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgMQAAgIACgFQABgFAFgFIAFgGIAEgJQABgDAAgGIAAgKIg0AAIAAgNIBDAAIAAAVQAAAIgCAFQgBAGgFAFIgEAGQgGAHAAAKIAAAOg");
	this.shape_55.setTransform(339.9,104.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0033FF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_56.setTransform(333.2,105.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgFABgDIABgIIAAgLIgtAAIAAgsIAPAAIAAAfIAsAAIAAAVQAAAIgBAFQgCAFgEAGIgEAGQgGAIAAAKIAAANg");
	this.shape_57.setTransform(651.8,82.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0033FF").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgDQgGgDgLAAIgOABIAABFIgPAAIAAhQQAQgDAOAAQAPAAAJAFQAJAEAFAIQADAHAAAOIAAAtg");
	this.shape_58.setTransform(643.6,83.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0033FF").s().p("AgcApIAAgMIAoAAIgshFIAQAAIAWAkQAGgEADgFQACgFAAgJIABgNIAPAAIAAAPIgCAMQgBAEgEAFQgFAEgJAFIASAbIAAAJg");
	this.shape_59.setTransform(634.6,83.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0033FF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_60.setTransform(629.2,83.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0033FF").s().p("AgjAgQAOgCAIgCIgNhIIAPAAIALBDQANgGAEgJQADgJAAgOIABgdIAPAAIgBAWIgBAWQgBAFgEAIQgDAHgGAHQgHAFgMAFQgLAFgXADg");
	this.shape_61.setTransform(618.2,84.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgFABgDIABgIIAAgLIgtAAIAAgsIAPAAIAAAfIAsAAIAAAVQAAAIgBAFQgCAFgEAGIgEAGQgGAIAAAKIAAANg");
	this.shape_62.setTransform(610.4,82.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0033FF").s().p("AgCAqIAAgNIAaAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgIAAgFAJQgGAJgFAVIgGAfIgPAAIAHggIAEgPIgNgjIAPAAIAGASQADgIAIgFQAHgGAJAAQAJAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_63.setTransform(597.5,83.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0033FF").s().p("AATAqIAAgpQgBgKgCgGQgCgGgHgDQgHgEgLAAIgUACIgCgNIAXgCQAXAAAKAKQALAKAAATIAAAsg");
	this.shape_64.setTransform(588.5,83.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0033FF").s().p("AgdApIACgOQAHACAIAAQAJAAAFgDQAGgEADgGQADgHAAgJQAAgMgHgIQgHgIgMAAQgIAAgHACIgCgNQAJgDAHAAQAUAAAMANQALAMAAARQAAAMgFAKQgFAJgJAGQgKAFgOABQgHAAgJgCg");
	this.shape_65.setTransform(581.1,83.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0033FF").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_66.setTransform(575.5,81.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0033FF").s().p("AgnAqIAAgNIAzAAIAAgcQgBgKgCgGQgDgGgGgDQgGgEgPAAIgPABIgCgMQALgCAMAAQAVAAAKAKQAKAKAAATIAAAfIAOAAIAAANg");
	this.shape_67.setTransform(569.3,83.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0033FF").s().p("AAUApIgegrQgIADgBAMIgDAcIgQAAIAEgcQACgTAOgHIgTgbIASAAIAZAlQAFgEACgDQACgFABgJIACgQIAQAAIgCARQgCALgDAHQgEAGgJAFIAZAjg");
	this.shape_68.setTransform(556.1,83.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0033FF").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgDQgGgDgLAAIgOABIAABFIgPAAIAAhQQARgDANAAQAPAAAJAFQAJAEAFAIQADAHAAAOIAAAtg");
	this.shape_69.setTransform(546.7,83.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0033FF").s().p("AAIApIAAhFIgsAAIAAgMIBJAAIAAAMIgOAAIAABFg");
	this.shape_70.setTransform(537.9,83.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0033FF").s().p("AgCAqIAAgNIAaAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgIAAgFAJQgGAJgFAVIgGAfIgPAAIAHggIAEgPIgNgjIAPAAIAGASQADgIAIgFQAHgGAJAAQAJAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_71.setTransform(524.4,83.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0033FF").s().p("AgdApIACgOQAHACAIAAQAJAAAFgDQAGgEADgGQADgHAAgJQAAgMgHgIQgHgIgMAAQgIAAgHACIgCgNQAJgDAHAAQAUAAAMANQALAMAAARQAAAMgFAKQgFAJgJAGQgKAFgOABQgHAAgJgCg");
	this.shape_72.setTransform(516.1,83.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgFABgDIABgIIAAgLIgtAAIAAgsIAPAAIAAAfIAsAAIAAAVQAAAIgBAFQgCAFgEAGIgEAGQgGAIAAAKIAAANg");
	this.shape_73.setTransform(508.6,82.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0033FF").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgLQAAgJACgGQABgDAFgGIAFgHIAEgIQABgDAAgGIAAgLIg0AAIAAgMIBDAAIAAAVQAAAJgCAEQgBAGgFAGIgEAFQgGAIAAAJIAAAOg");
	this.shape_74.setTransform(496.4,85.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0033FF").s().p("AgUAmQgJgHgDgJQgEgIAAgQIAAgnIAPAAIAAArQAAARAHAHQAGAFAIAAQAJABAFgFQAFgEACgGQABgHAAgKIAAgLQAAgSgKAAQgIAAgFAIIgFgIQAIgOANABQALgBAFAKQAGAIAAARIAAAFQAAAQgDAIQgDAKgJAGQgJAHgNAAQgLgBgJgFg");
	this.shape_75.setTransform(487.3,83.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0033FF").s().p("AAOAqIgHgUQgIAAgHALIgEAJIgPAAIAHgNQAFgLAIgEQAHgDAFAAIAAgVIAAgKQgCgEgDgCQgCgCgGAAIgIABIgCgMQAGgCAIAAQAJAAAGAEQAFAEACAGQADAGAAAKIAAAZIAHAcg");
	this.shape_76.setTransform(479.2,83.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0033FF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_77.setTransform(474.2,83.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0033FF").s().p("AASAqIAAgpQABgKgDgGQgCgGgHgDQgHgEgLAAIgUACIgCgNIAXgCQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_78.setTransform(467.7,83.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0033FF").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_79.setTransform(462.1,81.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0033FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgMAAQgLAAgNACIgBgMQAOgDANAAQAZAAAKAKQAJAJAAAUIAAAsgAgjAqIAAguIAQAAIAAAug");
	this.shape_80.setTransform(455.4,83.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0033FF").s().p("AAUApIgegrQgIADgBAMIgDAcIgQAAIAEgcQACgTAOgHIgTgbIASAAIAZAlQAFgEACgDQACgFABgJIACgQIAQAAIgCARQgCALgDAHQgEAGgJAFIAZAjg");
	this.shape_81.setTransform(441.8,83.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0033FF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_82.setTransform(435.1,83.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0033FF").s().p("AgrAoIADgMQADACAGAAQAFAAACgDQACgCAAgGIAAgvIgQABIgCgLQASgDASAAQARAAALADQAJADAGAIQAFAJAAAQIAAAsIgPAAIAAgpQAAgLgCgGQgBgGgHgDQgFgDgOAAIgIAAIAAAxIgBAMQgBAEgFADQgEACgJAAQgIAAgHgCg");
	this.shape_83.setTransform(427.7,83.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0033FF").s().p("AgGApIAAhRIAOAAIAABRg");
	this.shape_84.setTransform(421,83.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0033FF").s().p("AgrAoIACgMQAFACAEAAQAGAAACgDQACgCAAgGIAAgvIgQABIgCgLQASgDASAAQARAAALADQAJADAGAIQAFAJAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgGgHgDQgFgDgOAAIgIAAIAAAxIAAAMQgCAEgFADQgFACgIAAQgIAAgHgCg");
	this.shape_85.setTransform(409,83.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0033FF").s().p("AASAqIAAgpQAAgKgCgGQgCgGgHgDQgHgEgLAAIgUACIgBgNIAVgCQAYAAALAKQAKAKgBATIAAAsg");
	this.shape_86.setTransform(399.9,83.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0033FF").s().p("AgcApIAAgMIAoAAIgshFIAQAAIAWAkQAGgEADgFQACgFAAgJIABgNIAPAAIAAAPIgCAMQgBAEgEAFQgFAEgJAFIASAbIAAAJg");
	this.shape_87.setTransform(392,83.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0033FF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_88.setTransform(386.6,83.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgFABgDIABgIIAAgLIgtAAIAAgsIAPAAIAAAfIAsAAIAAAVQAAAIgBAFQgCAFgEAGIgEAGQgGAIAAAKIAAANg");
	this.shape_89.setTransform(376.3,82.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0033FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAJgBAUIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_90.setTransform(368,83.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0033FF").s().p("AgdApIACgOQAHACAIAAQAJAAAFgDQAGgEADgGQADgHAAgJQAAgMgHgIQgHgIgMAAQgIAAgHACIgCgNQAJgDAHAAQAUAAAMANQALAMAAARQAAAMgFAKQgFAJgJAGQgKAFgOABQgHAAgJgCg");
	this.shape_91.setTransform(359.5,83.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0033FF").s().p("AgTAqIAAgNIAYAAIAAgnIgBgKQgBgEgDgCQgCgCgGAAIgIABIgBgMQAEgCAIAAQAKAAAFAEQAGAEACAGQACAGAAAKIAAA1g");
	this.shape_92.setTransform(352.7,83.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0033FF").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_93.setTransform(348.3,81.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0033FF").s().p("AgbAgQgLgMAAgUQAAgSALgMQAKgNARAAQAKAAAJAFQAIAFAGAKQAGAJAAAOQAAANgFAJQgEAKgJAGQgJAGgMAAQgRAAgKgMgAgQgVQgFAJAAAMQAAAPAFAIQAGAIAKAAQAMAAAFgJQAGgIAAgOQAAgOgGgIQgGgIgLAAQgKAAgGAJg");
	this.shape_94.setTransform(341.7,83.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0033FF").s().p("AgBA5IAAgLQAAgKABgFQACgGAEgEIAEgGQAEgFABgDIABgIIAAgLIgtAAIAAgsIAPAAIAAAfIAsAAIAAAVQAAAIgBAFQgCAFgEAGIgEAGQgGAIAAAKIAAANg");
	this.shape_95.setTransform(328.8,82.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0033FF").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgLQAAgJACgGQABgDAFgGIAFgHIAEgIQABgDAAgGIAAgLIg0AAIAAgMIBDAAIAAAVQAAAJgCAEQgBAGgFAGIgEAFQgGAIAAAJIAAAOg");
	this.shape_96.setTransform(321,85.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0033FF").s().p("AgGApIAAhRIANAAIAABRg");
	this.shape_97.setTransform(314.6,83.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0033FF").s().p("AgiAlIADgMQAHAFAMAAQAMAAALgHQAJgJAAgOQAAgNgHgIQgIgIgMAAIgNABIAAAQQAAAJAKAAIAGgBIACAKQgFABgGAAQgKABgGgGQgFgEAAgLIAAgYQANgEAPgBQASAAALALQANALAAAUQAAATgNAMQgMAMgWAAQgPgBgIgFg");
	this.shape_98.setTransform(308.4,83.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0033FF").s().p("AgbAgQgLgMAAgUQAAgSALgMQAKgNARAAQAKAAAJAFQAIAFAGAKQAGAJAAAOQAAANgFAJQgEAKgJAGQgJAGgMAAQgRAAgKgMgAgQgVQgFAJAAAMQAAAPAFAIQAGAIAKAAQAMAAAFgJQAGgIAAgOQAAgOgGgIQgGgIgLAAQgKAAgGAJg");
	this.shape_99.setTransform(299.3,83.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0033FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgBgMQAOgDANAAQAZAAAKAKQAKAJAAAUIAAAsgAgiAqIAAguIAOAAIAAAug");
	this.shape_100.setTransform(289.9,83.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0033FF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_101.setTransform(282.9,87.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AA4BrIAAhoQAAgfgIgPQgHgPgSgHQgSgIgiAAQgbAAgiAFIgDggQAkgGAjAAQBBAAAZAYQAaAZAAAzIAABxgAhaBrIAAh2IAmAAIAAB2g");
	this.shape_102.setTransform(645.8,48.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAwBrIAAhoQAAgcgGgPQgHgPgRgJQgSgJgeAAQgWAAgeAEIgDghQAfgEAaAAQA/AAAaAZQAZAYAAAzIAABxg");
	this.shape_103.setTransform(621.9,48.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhNBnIAGgiQASAHAUgBQAXAAAOgJQAQgKAIgRQAIgRAAgVQAAghgSgVQgSgVghAAQgUAAgSAGIgGgjQAYgFASAAQA1AAAdAfQAeAeABAwQAAAegOAZQgNAYgYAOQgYAPgmABQgSAAgYgHg");
	this.shape_104.setTransform(603,48.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhkBrIAAggICBAAIAAhIQAAgdgGgPQgGgPgRgIQgRgJglAAQgNAAgbADIgDggQAbgEAeAAQA4AAAaAYQAZAZAAAzIAABRIAiAAIAAAgg");
	this.shape_105.setTransform(582.6,48.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhwBmIAGgdQALAEAMgBQAOAAAFgFQAFgHAAgQIAAh5QgRAAgZAEIgDghQAtgFAvAAQAvAAAZAIQAaAIAOAWQANAUAAAqIAAByIgmAAIAAhpQAAgegFgOQgFgOgPgKQgQgIgkgBIgTAAIAACBQAAATgDALQgEAKgMAIQgMAGgXAAQgTAAgSgGg");
	this.shape_106.setTransform(557.2,48.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AA4BrIAAhoQAAgfgIgPQgHgPgSgHQgSgIgiAAQgbAAgiAFIgDggQAkgGAjAAQBBAAAZAYQAaAZAAAzIAABxgAhaBrIAAh2IAmAAIAAB2g");
	this.shape_107.setTransform(521.4,48.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhkBrIAAggICBAAIAAhIQAAgdgGgPQgGgPgRgIQgRgJglAAQgNAAgbADIgDggQAbgEAeAAQA4AAAaAYQAZAZAAAzIAABRIAiAAIAAAgg");
	this.shape_108.setTransform(498,48.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgyBrIAAggIA/AAIAAhnQAAgRgDgJQgCgJgIgFQgIgGgOAAQgNAAgJACIgDgeQANgEAUAAQAaAAAOAKQAPAKAFAPQAFAPAAAbIAACIg");
	this.shape_109.setTransform(478.7,48.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ag1BgQgXgPgJgYQgJgXAAgoIAAhkIAmAAIAABtQAAAvASAPQARAPAVAAQAWAAAOgKQANgLAEgRQAEgRAAgcIAAgbQAAgugbAAQgTAAgPAVIgMgUQAVgjAhAAQAcAAAOAWQAPAWAAAqIAAAPQAAAogIAYQgIAXgWAQQgXARgiAAQgeAAgXgPg");
	this.shape_110.setTransform(460.5,48.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgTBqIAAjTIAnAAIAADTg");
	this.shape_111.setTransform(443.2,48.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhlBrIAAggICDAAIAAhIQAAgdgHgPQgGgPgRgIQgSgJgkAAQgNAAgbADIgEggQAbgEAfAAQA5AAAZAYQAZAZABAzIAABRIAiAAIAAAgg");
	this.shape_112.setTransform(415.7,48.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgSBqIAAjTIAlAAIAADTg");
	this.shape_113.setTransform(399.5,48.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhTCTIAAjIIAlAAIAADIgAADBBIAAgcQAAgWADgOQAFgMAMgQIALgPQAKgLACgJQACgJABgOIAAgdIiGAAIAAggICrAAIAAA1QAAAWgDAOQgFAOgKAOIgKAPQgRAVAAAYIAAAig");
	this.shape_114.setTransform(383.5,52.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AhHBSQgbgfAAgyQAAgyAbgfQAbgfAsAAQAbAAAVAMQAWAMAPAZQAPAaAAAlQAAAfgMAZQgKAZgXAPQgXAPggAAQgsAAgbgegAgqg4QgOAXgBAiQABAlAPAWQAOAUAbAAQAdAAAPgWQAOgXAAgjQAAglgPgVQgPgWgcAAQgcAAgOAYg");
	this.shape_115.setTransform(360.1,48.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhEBbQgZgSgNgiQgMghAAg4IgDg6IAnAAIAAAiQACA1ADAUQAVABARgLQARgKAAgeIAEg5IAmAAIgFBDQgBAQgDAKQgCAIgIAJQgIAKgRAHQgSAIgdACQAFAWASANQASANAbgBQAXAAASgLQASgMAIgTQAIgSADghIAJhbIAmAAIgHBOQgEArgLAeQgLAdgaATQgbASgpAAQgmAAgZgSg");
	this.shape_116.setTransform(322.8,49.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgFCTIAAgdQAAgaAFgNQAEgNAKgMIAMgPQAJgMACgJQADgJAAgNIAAgcIh1AAIAAhyIAmAAIAABSIB1AAIAAA0QAAAWgEAOQgFAOgKAOIgLAOQgQAWAAAZIAAAig");
	this.shape_117.setTransform(298.6,44.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgSA3IAAhtIAlAAIAABtg");
	this.shape_118.setTransform(284.6,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(506.2,270.1,1592.9,525.4);
// library properties:
lib.properties = {
	width: 960,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bento box_atlas_.png?1498410313257", id:"Bento box_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;