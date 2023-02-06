import React from 'react';
interface Block {
  /** Rendered inside block_content */
  children: React.ReactNode;
  /** Rendered before block_content */
  beforeContent?: React.ReactNode;
  /** Rendered after block_content */
  afterContent?: React.ReactNode;
  typeFilter?: boolean;
  smallContentSize?: boolean;
  align?: 'left' | 'right';
  title?: string;
}
/**
 * Global element used in most components. See [here](https://randstad.design/getting-started/developers/block-header-content/).
 */
declare function Block({ children, beforeContent, afterContent, typeFilter, smallContentSize, align, title }: Block): JSX.Element;
export default Block;
