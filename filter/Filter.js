var Filter = React.createClass({

    displayName: 'Filter',
  
    propTypes: {
      fullWords: React.PropTypes.arrayOf( 
        React.PropTypes.string.isRequired,
      ),
    },

    getInitialState: function() {
      return {
        filter: "", 
        sort: false,
        currentWords: this.props.fullWords,
      };
    },

    sortChanged: function(eo) {
      this.setState({sort: eo.target.checked}, this.processWords);
    },

    filterChanged: function(eo) {
      this.setState({filter: eo.target.value}, this.processWords);
    },

    clearAll: function(eo) {
      this.setState({filter: "", sort: false}, this.processWords);
    },

    processWords: function() {
      let words = this.props.fullWords.slice();
      if (this.state.filter)
        words =  words.filter(item => item.indexOf(this.state.filter.toLowerCase()) !== -1);
      if (this.state.sort)
        words =  words.sort();
      this.setState({currentWords: words});
    },
  
    render: function() { 
      return React.DOM.div( {className:'FilterBlock'},
        React.DOM.input( {className:'Sort', type: 'checkbox', checked: this.state.sort, onClick: this.sortChanged}),
        React.DOM.input( {className:'Filter', type: 'text', value: this.state.filter, onChange: this.filterChanged} ),
        React.DOM.input( {className:'Clear', type: 'button', value: 'Clear', onClick: this.clearAll} ),
        React.DOM.div( {className:'WordsDisplay'}, this.state.currentWords.map((item, index) => React.DOM.div({key: index, className:'Word'}, item), React.DOM.br())),
      )
    },
  
});