var Product = React.createClass({

    displayName: 'Product',
  
    propTypes: {
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      imgURL: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number.isRequired,
      selectedItemCode: React.PropTypes.number,
      cbSelected: React.PropTypes.func.isRequired,
      cbDelete: React.PropTypes.func.isRequired,

    //   code: React.PropTypes.number.isRequired,
    //   count: React.PropTypes.number.isRequired,
    //   text: React.PropTypes.string.isRequired,
    //   workMode: React.PropTypes.number.isRequired,
    //   freeanswer: React.PropTypes.bool,
    //   freeanswertext: React.PropTypes.string.isRequired,
    //   cbFreeAnswerTextChanged: React.PropTypes.func.isRequired,
    //   cbSelected: React.PropTypes.func.isRequired,
    //   selectedAnswerCode: React.PropTypes.number, // может быть null, пока ни один ответ не выбран
    },

    productClicked: function() {
        this.props.cbSelected(this.props.SKU);
    },

    delete: function(e) {
        this.props.cbDelete(this.props.SKU);
        e.stopPropagation();
    },
  
    // answerClicked: function(EO) {
    //   this.props.cbSelected(this.props.code);
    // },
  
    // freeAnswerTextChanged: function(EO) { 
    //   console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
    //   this.props.cbFreeAnswerTextChanged(EO.target.value);
    // },
  
    render: function() {
        return React.DOM.tr({onClick: this.productClicked, className:(this.props.selectedItemCode==this.props.SKU)?'ProductSelected':'Product'},
            React.DOM.td({className:'ProductName'},this.props.name),
            React.DOM.td({className:'Price'},this.props.price),
            React.DOM.td({className:'ImageCell'}, React.DOM.img({className:'Image', src: this.props.imgURL},)),
            React.DOM.td({className:'Quantity'},this.props.quantity),
            React.DOM.td({className:'Control'},React.DOM.input({className:'Delete', type: 'button', value:'Delete', onClick:this.delete})),
        )
    }

        
  
//       if ( this.props.workMode==1 ) {
//         return React.DOM.div(null,
//           React.DOM.label({className:'VotesBlockAnswer'},
//             React.DOM.input({type:'radio',value:this.props.code,name:'voteanswer',
//               checked:(this.props.selectedAnswerCode==this.props.code),
//               onClick:this.answerClicked}),
//             React.DOM.span(null,this.props.text),
//             this.props.freeanswer
//               ?React.DOM.input({type:'text',name:'votefreeanswer',className:'FreeAnswer',
//                 defaultValue:this.props.freeanswertext,onChange:this.freeAnswerTextChanged,
//                 disabled:(this.props.selectedAnswerCode!=this.props.code)
//               })
//               :null
//           ),
//         );
//       }
//       else {
//         return React.DOM.div( {className:'VotesBlockAnswer'},
//           React.DOM.span({className:'Count'},this.props.count),
//           React.DOM.span({className:'Text'},this.props.text)
//         );
//       }
  
//     },
     });
