var IShop = React.createClass({

    displayName: 'IShop',
  
    propTypes: {
      shopName: React.PropTypes.string.isRequired, // название магазина
      // товары
      startItemsList: React.PropTypes.arrayOf( 
        React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          imgURL: React.PropTypes.string.isRequired,
          quantity: React.PropTypes.number.isRequired,
        })
      ),
    },

    getInitialState: function() {
      return { 
        selectedItemCode: null,
        itemsList: this.props.startItemsList,
      };
    },

    productSelected: function(newSelectedItem) {
      this.setState({selectedItemCode: newSelectedItem});
    },

    deleteItem: function(itemCode) {
      let newItemsList = this.state.itemsList.filter(item => item.SKU!==itemCode);
      this.setState({itemsList: newItemsList});
      console.log(newItemsList)
    },
  
    render: function() {
  
      var productsSKU=this.state.itemsList.map( v =>
        React.createElement(Product, {key:v.SKU,
            name: v.name, price: v.price, imgURL: v.imgURL, quantity: v.quantity, SKU: v.SKU,
            selectedItemCode: this.state.selectedItemCode,
            cbSelected: this.productSelected,
            cbDelete: this.deleteItem,
        })
      );
      return React.DOM.div( {className:'IShop'},
        React.DOM.table( {}, 
          React.DOM.caption( {className:'ShopName'}, this.props.shopName),
          React.DOM.thead( {}, (
            React.DOM.tr( {},
              React.DOM.th( {className:'ProductName'},'Name'),
              React.DOM.th( {className:'Price'},'Price'),
              React.DOM.th( {className:'Image'},'Image'),
              React.DOM.th( {className:'Quantity'},'Quantity'),
              React.DOM.th( {className:'Control'},'Control'),
            )
          )),
          React.DOM.tbody( {className:'Products'}, productsSKU )),
      );
    },
  
  });