// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import actions from '../../reducers/actions';
import Item from '../Item';

const defaultSkin = {};

export const selector = createSelector(
  (state, props) => state.skins[props.id] || defaultSkin,
  (skin) => ({
    skin,
  })
);

export default connect(selector, {
  fetch: actions.fetchSkins,
})(
class Gw2Skin extends Component<*> {
  props: {
    id: number,
    skin: Object,
    fetch: ([number]) => void,
  };

  componentWillMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return <Item {...this.props} />;
  }
}
);
