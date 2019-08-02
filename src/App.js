import React, { Component } from 'react';
import './App.css';

let defaultTextarea = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 483.334 483.334" style="enable-background:new 0 0 483.334 483.334;" xml:space="preserve">
<g id="XMLID_1367_">
	<g id="XMLID_1365_">
		<polygon style="fill:#FFFFFF;" points="322.223,388.043 380.809,373.397 417.425,344.104 446.718,285.518 432.071,256.225
			270.96,256.225 270.96,73.144 263.637,65.821 227.02,80.467 190.404,124.407 190.404,292.841 234.344,358.75 		"/>
	</g>
	<g id="XMLID_1366_">
		<path style="fill:#EDEDED;" d="M270.961,258.347c-21.176,6.302-36.618,25.918-36.618,49.14c0,28.312,22.951,51.263,51.263,51.263
			h124.495l-58.586-58.586H248.99"/>
	</g>
	<g id="XMLID_1311_">
		<polygon style="fill:#F39200;" points="190.404,146.376 14.647,146.376 0,124.407 190.404,124.407 		"/>
	</g>
	<g id="XMLID_1279_">
		<path style="fill:#575756;" d="M483.334,344.104H284.859c-19.81,0-35.869-16.059-35.869-35.869v-22.717h197.727L483.334,344.104z"
			/>
	</g>
	<g id="XMLID_1181_">
		<path style="fill:#F9B233;" d="M189.027,358.75h-18.964c-85.834,0-155.416-69.582-155.416-155.416v-56.957h175.758v210.996
			C190.404,358.134,189.788,358.75,189.027,358.75z"/>
	</g>
	<g id="XMLID_1315_">
		<polygon style="fill:#F39200;" points="14.647,148.105 43.94,146.376 43.94,292.841 14.647,237.522 		"/>
	</g>
	<g id="XMLID_857_">
		<rect x="388.132" y="307.311" style="fill:#1D1D1B;" width="80.556" height="15"/>
	</g>
	<g id="XMLID_858_">
		<rect x="373.485" y="278.018" style="fill:#1D1D1B;" width="80.556" height="15"/>
	</g>
	<g id="XMLID_768_">
		<rect x="219.697" y="109.583" style="fill:#1D1D1B;" width="14.646" height="15"/>
	</g>
	<path style="fill:#1D1D1B;" d="M292.794,336.332c-20.018,0-36.304-16.286-36.304-36.304c0-20.018,16.286-36.304,36.304-36.304
		h146.601v-15H292.794c-4.975,0-9.782,0.726-14.334,2.053V73.321h21.793v-15h-11.188l9.168-9.168l-10.607-10.605l-9.167,9.167
		V36.528h-15v22.116c-34.941,2.961-64.124,26.416-75.471,58.262H0v15h184.103c-0.412,2.479-0.727,4.99-0.926,7.534H7.147v65.522
		c0,88.934,72.354,161.287,161.288,161.287c16.249,0,29.47-13.22,29.47-29.47v-17.716c23.009,45.336,70.093,76.478,124.318,76.478
		c38.57,0,75.492-16.08,101.795-44.211h59.316v-15h-190.54V336.332z M182.904,336.78c0,7.979-6.491,14.47-14.47,14.47
		c-80.664,0-146.288-65.624-146.288-146.287V154.44h160.758V336.78z M322.223,380.543c-68.549,0-124.318-55.769-124.318-124.318
		v-14.646V153.7v-7.323c0-37.75,28.784-68.904,65.556-72.673v184.272c-13.268,9.283-21.97,24.667-21.97,42.053
		c0,28.289,23.015,51.304,51.304,51.304h109.463C379.984,370.055,351.641,380.543,322.223,380.543z"/>
	<g id="XMLID_771_">
		<polygon style="fill:#1D1D1B;" points="51.439,197.639 36.439,197.639 36.439,168.169 73.232,168.169 73.232,183.169
			51.439,183.169 		"/>
	</g>
	<polygon style="fill:#1D1D1B;" points="322.399,431.806 322.399,402.689 307.399,402.689 307.399,431.806 285.606,431.806
		285.606,446.806 337.962,446.806 337.962,431.806 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;

class App extends Component {

  state = {
    currentElement: null
  }

  importSvg(){
    let textarea = this.refs._textarea;
    console.log("Deneme!", textarea.value);

    let svgCarrier = this.refs._svgCarrier;

    svgCarrier.innerHTML = textarea.value;
  }

  clearSvg(){
    let textarea = this.refs._textarea;
    textarea.value = "";

    let svgCarrier = this.refs._svgCarrier;
    svgCarrier.innerHTML = "";
  }

  exportSvg(){
    let svgCarrier = this.refs._svgCarrier;
    let textarea = this.refs._textarea;

    textarea.value = "Processing...";

    setTimeout(() => {
      textarea.value = svgCarrier.innerHTML;
    }, 1000);
  }


  chooseElement(e){
    console.log("Choosing element", e.target);
    //e.target.style.fill = "red";
    this.setState({currentElement: e.target});
    setTimeout(() => {
      this.refs._hexCode.value = "";      
    }, 100);

  }

  changeColor(){
    let color = this.refs._hexCode.value;
    this.state.currentElement.style.fill = color;
  }

  render(){
    return (
      <div className="App">

        <div className="holder">
          <div ref="_svgCarrier" className="svgCarrier" onClick={this.chooseElement.bind(this)}></div>
          {this.state.currentElement &&
            <div className="inputCarrier">
              {this.state.currentElement.style.fill}
              <p>Change the color of this element</p>
              <input ref="_hexCode" placeholder={"#000000"}/>
              <button onClick={() => this.changeColor()}>Change</button>
            </div>
          }
        </div>
        <textarea rows="20" cols="100" ref={"_textarea"} defaultValue={defaultTextarea}></textarea>
        <div style={{clear: "both"}}></div>
        <button onClick={() => this.importSvg()}>Import</button>
        <button onClick={() => this.clearSvg()}>Clear</button>
        <hr/>
        <button onClick={() => this.exportSvg()}>Export</button>
      </div>
    );
  }
}

export default App;
