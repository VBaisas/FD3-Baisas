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
    },

    productClicked: function() {
        this.props.cbSelected(this.props.SKU);
    },

    delete: function(e) {
        this.props.cbDelete(this.props.SKU);
        e.stopPropagation();
    },
  
    render: function() {
        return React.DOM.tr({onClick: this.productClicked, className:(this.props.selectedItemCode==this.props.SKU)?'ProductSelected':'Product'},
            React.DOM.td({className:'ProductName'},this.props.name),
            React.DOM.td({className:'Price'},this.props.price),
            React.DOM.td({className:'ImageCell'}, React.DOM.img({className:'Image', src: this.props.imgURL},)),
            React.DOM.td({className:'Quantity'},this.props.quantity),
            React.DOM.td({className:'Control'},React.DOM.input({className:'Delete', type: 'button', value:'Delete', onClick:this.delete})),
        )
    }
     });
