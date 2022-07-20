var IShop = React.createClass({

    displayName: 'IShop',
  
    propTypes: {
      shopName: React.PropTypes.string.isRequired, // название магазина
      // товары
      products: React.PropTypes.arrayOf( 
        React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          imgURL: React.PropTypes.string.isRequired,
          quantity: React.PropTypes.number.isRequired,
        })
      )
    },
  
    render: function() {
  
      var productsSKU=this.props.products.map( v =>
          React.DOM.tr({key:v.SKU,className:'Product'},
            React.DOM.td({className:'ProductName'},v.name),
            React.DOM.td({className:'Price'},v.price),
            React.DOM.td({className:'ImageCell'}, React.DOM.img({className:'Image', src: v.imgURL},)),
            React.DOM.td({className:'Quantity'},v.quantity),
          )
        );
      return React.DOM.div( {className:'IShop'},
        React.DOM.table( {}, 
          React.DOM.caption( {className:'ShopName'}, this.props.shopName),
          React.DOM.thead( {}, (
            React.DOM.tr( {},
              React.DOM.th( {className:'ProductName'},'Name'),
              React.DOM.th( {className:'Price'},'Price'),
              React.DOM.th( {className:'Image'},'Image'),
              React.DOM.th( {className:'Quantity'},'Quantity')
            )
          )),
          React.DOM.tbody( {className:'Products'}, productsSKU )),
      );
    },
  
  });