var entryField;
var nTrials = 100;
var trialNumber = 0;
var results = "";

//Trial Parameters:
var scaleLine_y = 180;
var scaleLineLength;
var scaleLineLengths = [25, 100];
var pt1_x; var pt1_y;
var pt2_x; var pt2_y;

//Rendering:
var canvasSize;
var canvas;
var ctx;

$(document).ready(function () {
    $("#textEntry").keydown(function(e)
    {
      var keynum = e.keyCode;

      if(keynum == 13)
      {
          newTrial();
      }
    });
});


function start()
{
  entryField = document.getElementById("textEntry");
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvasSize = canvas.width;
}



function newTrial()
{
  if(trialNumber > 0)
  {
    LogResult();
  }
  trialNumber += 1;

  if(trialNumber > nTrials)
  {
    downloadTextFile(results, "LinearPerceptionTrialData.txt")
  }
  else
  {
    entryField.value = "";
    SetTrialPoints();
    RenderTrialPoints();
  }
}

function SetTrialPoints()
{
  scaleLineLength = scaleLineLengths[Math.floor(scaleLineLengths.length * Math.random())];
  pt1_x = Math.floor(canvas.width * Math.random());
  pt1_y = Math.floor(scaleLine_y * Math.random());
  pt2_x = Math.floor(canvas.width * Math.random());
  pt2_y = Math.floor(scaleLine_y * Math.random());
}


//Rendering:
function RenderTrialPoints()
{
  ClearCanvas();

  var lineStart = 20;
  var lineEnd = lineStart + scaleLineLength;
  DrawScaleLine(lineStart, scaleLine_y, lineEnd, scaleLine_y);

  DrawPoint(pt1_x, pt1_y);
  DrawPoint(pt2_x, pt2_y);
}

function DrawScaleLine(start_x = 10, start_y = canvasSize/2, end_x = canvasSize - 10, end_y = canvasSize/2)
{
  ctx.beginPath();
  ctx.moveTo(start_x, start_y);
  ctx.lineTo(end_x,end_y);
  ctx.stroke();
}

function DrawPoint(x,y){
  var pointSize = 3;
  var fillColor = "#ff2626";

  ctx.fillStyle = fillColor
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
}

function ClearCanvas()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

//Data Logging:
function LogResult()
{
  try {
      results += "LineLength:" + String(scaleLineLength) +
      "#pt1_x:" + String(pt1_x) +
      "#pt1_y:" + String(pt1_y) +
      "#pt2_x:" + String(pt2_x) +
      "#pt2_y:" + String(pt2_y) +
      "#ReportedRatio:"+  String(entryField.value) + "\n";
    }
    catch
    {
      results += "";
    }
}

function downloadTextFile(text, name)
{
  const a = document.createElement('a');
  const type = name.split(".").pop();
  a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
  a.download = name;
  a.click();
}
