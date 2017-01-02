var data;

function setup() {
  createCanvas(400, 400);
  Tabletop.init({
    key: '1Lm_Tvp357lwxHfWuiEqIV4qFXpwA3sE7dWdCTZvYXvs',
    callback: gotData,
    simpleSheet: true
  })

}

function draw() {
}

function gotData(stuff, tabletop) {
  data = stuff;
  console.log(data);
	var xpos = 0;
  for (i = 0; i < data.length-1; i++) {
    print(data[i].Temp);
    var ypos = map(data[i].Temp, 400,415,0,height);
    var nextypos = map(data[i+1].Temp, 400,415,0,height);
    line(xpos,ypos,xpos=xpos+20,nextypos)

    
  }
}