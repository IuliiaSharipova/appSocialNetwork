import React from 'react';
import './index.css';
import {rerenderEntireTree} from './rerender';
import {state} from './redux/state';

rerenderEntireTree(state)