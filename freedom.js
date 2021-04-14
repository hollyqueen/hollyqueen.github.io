/* 
Author: Charisse Hanson 
Library: highcharts sunburst module 
Base code: https://www.highcharts.com/demo/sunburst
*/

var data = [{
  id: "Honesty",
  parent: "",
  name: "HONESTY", 
  color: '#9ACCEF',
  value: 1
}, {
  id: "Disclosure",
  parent: "Honesty",
  name: "Disclosure",
  description: "Identity",
  color: '#F0C0BC',
  value: 25
}, {
  id: "Creativity",
  parent: "Honesty",
  name: "Creativity",
  description: "Commitment",
  color: '#F54B4B',
  value: 25
}, {
  id: "Trust",
  parent: "Honesty",
  name: "Trust",
  description: "Gratification",
  color: '#9ACCEF',
  value: 25
}, {
  id: "Integrity",
  parent: "Honesty",
  name: "Integrity",
  description: "Survival",
  color: '#9ACCEF',
  value: 25
}, {  
  id: "Acceptance",
  parent: "Honesty",
  name: "Acceptance",
  description: "Identity",
  color: '#9ACCEF',
  value: 25
}, {
  id: "Structure",
  parent: "Honesty",
  name: "Structure",
  description: "Commitment",
  color: '#9ACCEF',
  value: 25
}, {
  id: "Support",
  parent: "Honesty",
  name: "Support",
  description: "Gratification",
  color: '#DC81AD',
  value: 25
}, {
  id: "Assertiveness",
  parent: "Honesty",
  name: "Assertiveness",
  description: "Survival",
  color: '#F54B4B',
  value: 25
},


/* DISCLOSURE */
{
  id: "IShareMyVul",
  parent: "Disclosure",
  name: "I share my vulnerability",
  description: "Description",
  color: '#F0C0BC',
  value: 25
}, {
  id: "IExpressMyFee",
  parent: "Disclosure",
  name: "I express my feelings",
  description: "Description",
  color: '#46748E',
  value: 25
}, {
  id: "IRiskTakingAct",
  parent: "Disclosure",
  name: "I risk taking action",
  description: "Description",
  color: '#DC81AD',
  value: 25
}, {
  id: "IShareMyIdeas",
  parent: "Disclosure",
  name: "I share my ideas, questions",
  description: "Description",
  color: '#75C3AB',
  value: 25
},


/* ACCEPTANCE */
{
  id: "UnconditionalLove",
  parent: "Acceptance",
  name: "Unconditional love",
  description: "Description",
  color: '#F0C0BC',
  value: 25
}, {
  id: "Compassion",
  parent: "Acceptance",
  name: "Compassion",
  description: "Description",
  color: '#46748E',
  value: 25
}, {
  id: "Identification",
  parent: "Acceptance",
  name: "Identification",
  description: "Description",
  color: '#DC81AD',
  value: 25
}, {
  id: "WelcomingInput",
  parent: "Acceptance",
  name: "Welcoming input",
  description: "Description",
  color: '#75C3AB',
  value: 25
}, 

/* CREATIVITY*/
{
  id: "InsightWisdom",
  parent: "Creativity",
  name: "Insight, wisdom",
  description: "Description",
  color: '#F54B4B',
  value: 25
}, {
  id: "OpeningAlt",
  parent: "Creativity",
  name: "Opening alternatives",
  description: "Description",
  color: '#F7C015',
  value: 25
}, {
  id: "RelaxationVitality",
  parent: "Creativity",
  name: "Relaxation, vitality",
  description: "Description",
  color: '#77CAD0',
  value: 25
}, {
  id: "CuriositySpont",
  parent: "Creativity",
  name: "Curiosity, spontaneity",
  description: "Description",
  color: '#008FD3',
  value: 25
},


/* STRUCTURE */
{
  id: "CreatingContinuity",
  parent: "Structure",
  name: "Creating continuity, duration",
  description: "Description",
  color: '#F54B4B',
  value: 25
}, {
  id: "EstablishingValues",
  parent: "Structure",
  name: "Establishing values, limits",
  description: "Description",
  color: '#F7C015',
  value: 25
}, {
  id: "WaysToNourish",
  parent: "Structure",
  name: "Ways to nourish and heal",
  description: "Description",
  color: '#77CAD0',
  value: 25
}, {
  id: "ProcForDoing",
  parent: "Structure",
  name: "Procedures for doing",
  description: "Description",
  color: '#008FD3',
  value: 25
}, 


/* TRUST*/
{
  id: "AcceptingSuccess",
  parent: "Trust",
  name: "Accepting success, praise",
  description: "Description",
  color: '#37526F',
  value: 25
}, {
  id: "AcceptingInvolve",
  parent: "Trust",
  name: "Accepting involvement",
  description: "Description",
  color: '#DC81AD',
  value: 25
}, {
  id: "AcceptingTenderness",
  parent: "Trust",
  name: "Accepting tenderness",
  description: "Description",
  color: '#F54B4B',
  value: 25
}, {
  id: "AcceptingCompanion",
  parent: "Trust",
  name: "Accepting companionship",
  description: "Description",
  color: '#0FA572',
  value: 25
},


/* SUPPORT */
{
  id: "ExperiencingAck",
  parent: "Support",
  name: "Experiencing acknowledgement",
  description: "Description",
  color: '#37526F',
  value: 25
}, {
  id: "ExperiencingRespect",
  parent: "Support",
  name: "Experiencing respect",
  description: "Description",
  color: '#DC81AD',
  value: 25
}, {
  id: "ExperiencingAffection",
  parent: "Support",
  name: "Experiencing affection",
  description: "Description",
  color: '#F54B4B',
  value: 25
}, {
  id: "ExperiencingInclusion",
  parent: "Support",
  name: "Experiencing inclusion",
  description: "Description",
  color: '#0FA572',
  value: 25
}, 


/* INTEGRITY */
{
  id: "FeelingMyAnger",
  parent: "Integrity",
  name: "Feeling my anger, fear",
  description: "Description",
  color: '#F54B4B',
  value: 25
}, {
  id: "FeelingMyPain",
  parent: "Integrity",
  name: "Feeling my pain, grief",
  description: "Description",
  color: '#F7C015',
  value: 25
}, {
  id: "FeelingMyPower",
  parent: "Integrity",
  name: "Feeling my power",
  description: "Description",
  color: '#008FD3',
  value: 25
}, {
  id: "FeelingMySatis",
  parent: "Integrity",
  name: "Feeling my satisfacation",
  description: "Description",
  color: '#0FA572',
  value: 25
},


/* ASSERTIVENESS */
 {
  id: "ISayNo",
  parent: "Assertiveness",
  name: "I say no",
  color: '#F54B4B',
  description: "Description",
  value: 25
},{
  id: "IStateWants",
  parent: "Assertiveness",
  name: "I state my wants",
  color: '#F7C015',
  description: "Description",
  value: 25
},{
  id: "IExpressPrefer",
  parent: "Assertiveness",
  name: "I express preferences",
  color: '#008FD3',
  description: "Description",
  value: 25
}, {
  id: "IAffirm",
  parent: "Assertiveness",
  name: "I affirm",
  color: '#0FA572',
  description: "Description",
  value: 25
}


];

//==========================================================

// Splice in transparent for the center circle
/*Highcharts.getOptions().colors.splice(0, 0, 'transparent'); */

Highcharts.chart('container', {
  chart: {
    height: '80%',
    backgroundColor: '#9ACCEF',
  },

  title: {
    useHTML: true,
    text: '<div style="font-family:arial; font-size:20px; text-align:center;font-weight:bold;">--- Interactive Sunburst Chart ---</div><div style="font-family:arial; font-size:30px; text-align:center;font-weight:bold;">Freedom Wheel</div>'
  },
  subtitle: {
    useHTML: true,
    text: '<div style="font-family:arial; font-size:16px;   text-align:center;">Responsive and Expressive Behaviors.<br><br></div>'
  },
    series: [{
    type: "sunburst",
    data: data,
    colorByPoint: true,
    allowTraversingTree: true,
    cursor: 'pointer',
    startAngle: 0,
    dataLabels: {
	  format: '<div style="font-family:arial, san-serif; font-size:22px;">{point.name}</div>',
     filter: {
        property: 'innerArcLength',
        operator: '>',
        value: 45
      },
      /* rotationMode: 'circular' */
    },
    levels: [{
      level: 1,
      levelIsConstant: true,
      levelSize: {
        unit: 'pixels',
        value: 55
      },
      dataLabels: {
          rotationMode: 'parallel',
		  format: '<div style="font-family:arial, san-serif; font-size:16px; vertical-align:top;stroke-width:0px; stroke-linejoin=bevel;">{point.name}</div>',
          filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 1
          }
      }
    }, {
      level: 2,
      levelIsConstant: true,
      levelIsConstant: true,
      levelSize: {
        unit: 'pixels',
        value: 115
      },
	    dataLabels: {
        rotationMode: 'circular',
		format: '<div style="font-family:arial, san-serif; font-size:14px; word-wrap:break-word; stroke-width:0px; stroke-linejoin=bevel;">{point.name}</div>',
        filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 2
        }
      }
    },
    {
      level: 3,
      levelIsConstant: true,
      colorVariation: {
        key: 'brightness',
        to: -0.5
      },
	  dataLabels: {
      rotationMode: 'circular',
	  format: '<div style="font-family:arial, san-serif; font-size:12px; word-wrap: break-word; stroke-width:0px; stroke-linejoin=bevel;">{point.name}</div>',
        filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 3
        }
      }
    }]

  }],
  tooltip: {
    enabled: false
  }
});
