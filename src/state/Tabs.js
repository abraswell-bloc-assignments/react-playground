import React from 'react';

class Tabs extends React.Component {
    // Have to define .props.tabs before rendering
    static defaultProps = { tabs: [] };  

    state = {
        currentTabIndex: 0
    };

    handleButtonClick (index) {
        this.setState({ currentTabIndex: index })
    }
    
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick= {() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }

    renderContent() {
        // to meet requirement that the first tab renders by default
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className= 'content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
                {/* only show content when the tabs array has length */}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }

}


export default Tabs;