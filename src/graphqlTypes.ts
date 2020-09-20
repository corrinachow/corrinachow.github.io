export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAbout = Node & {
  __typename?: 'ContentfulAbout';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  shortBio?: Maybe<Scalars['String']>;
  profileImage?: Maybe<ContentfulAsset>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNode>;
  aboutPage?: Maybe<ContentfulAboutAboutPageTextNode>;
  skillset?: Maybe<ContentfulAboutSkillsetJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAboutSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNode>;
  childContentfulAboutAboutPageTextNode?: Maybe<ContentfulAboutAboutPageTextNode>;
  childContentfulAboutSkillsetJsonNode?: Maybe<ContentfulAboutSkillsetJsonNode>;
};


export type ContentfulAboutCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAboutUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAboutAboutMeTextNode = Node & {
  __typename?: 'contentfulAboutAboutMeTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  aboutMe?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAboutAboutMeTextNodeConnection = {
  __typename?: 'contentfulAboutAboutMeTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutAboutMeTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutMeTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutAboutMeTextNodeGroupConnection>;
};


export type ContentfulAboutAboutMeTextNodeConnectionDistinctArgs = {
  field: ContentfulAboutAboutMeTextNodeFieldsEnum;
};


export type ContentfulAboutAboutMeTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutAboutMeTextNodeFieldsEnum;
};

export type ContentfulAboutAboutMeTextNodeEdge = {
  __typename?: 'contentfulAboutAboutMeTextNodeEdge';
  next?: Maybe<ContentfulAboutAboutMeTextNode>;
  node: ContentfulAboutAboutMeTextNode;
  previous?: Maybe<ContentfulAboutAboutMeTextNode>;
};

export enum ContentfulAboutAboutMeTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  AboutMe = 'aboutMe',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type ContentfulAboutAboutMeTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutMe?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAboutAboutMeTextNodeGroupConnection = {
  __typename?: 'contentfulAboutAboutMeTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutAboutMeTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutMeTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutAboutMeTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutAboutMeTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutAboutPageTextNode = Node & {
  __typename?: 'contentfulAboutAboutPageTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  aboutPage?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAboutAboutPageTextNodeConnection = {
  __typename?: 'contentfulAboutAboutPageTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutAboutPageTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutPageTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutAboutPageTextNodeGroupConnection>;
};


export type ContentfulAboutAboutPageTextNodeConnectionDistinctArgs = {
  field: ContentfulAboutAboutPageTextNodeFieldsEnum;
};


export type ContentfulAboutAboutPageTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutAboutPageTextNodeFieldsEnum;
};

export type ContentfulAboutAboutPageTextNodeEdge = {
  __typename?: 'contentfulAboutAboutPageTextNodeEdge';
  next?: Maybe<ContentfulAboutAboutPageTextNode>;
  node: ContentfulAboutAboutPageTextNode;
  previous?: Maybe<ContentfulAboutAboutPageTextNode>;
};

export enum ContentfulAboutAboutPageTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  AboutPage = 'aboutPage',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type ContentfulAboutAboutPageTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutPage?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAboutAboutPageTextNodeGroupConnection = {
  __typename?: 'contentfulAboutAboutPageTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutAboutPageTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutPageTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutAboutPageTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutAboutPageTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutConnection = {
  __typename?: 'ContentfulAboutConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutEdge>;
  nodes: Array<ContentfulAbout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutGroupConnection>;
};


export type ContentfulAboutConnectionDistinctArgs = {
  field: ContentfulAboutFieldsEnum;
};


export type ContentfulAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutFieldsEnum;
};

export type ContentfulAboutEdge = {
  __typename?: 'ContentfulAboutEdge';
  next?: Maybe<ContentfulAbout>;
  node: ContentfulAbout;
  previous?: Maybe<ContentfulAbout>;
};

export enum ContentfulAboutFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ShortBio = 'shortBio',
  ProfileImageId = 'profileImage___id',
  ProfileImageParentId = 'profileImage___parent___id',
  ProfileImageParentParentId = 'profileImage___parent___parent___id',
  ProfileImageParentParentChildren = 'profileImage___parent___parent___children',
  ProfileImageParentChildren = 'profileImage___parent___children',
  ProfileImageParentChildrenId = 'profileImage___parent___children___id',
  ProfileImageParentChildrenChildren = 'profileImage___parent___children___children',
  ProfileImageParentInternalContent = 'profileImage___parent___internal___content',
  ProfileImageParentInternalContentDigest = 'profileImage___parent___internal___contentDigest',
  ProfileImageParentInternalDescription = 'profileImage___parent___internal___description',
  ProfileImageParentInternalFieldOwners = 'profileImage___parent___internal___fieldOwners',
  ProfileImageParentInternalIgnoreType = 'profileImage___parent___internal___ignoreType',
  ProfileImageParentInternalMediaType = 'profileImage___parent___internal___mediaType',
  ProfileImageParentInternalOwner = 'profileImage___parent___internal___owner',
  ProfileImageParentInternalType = 'profileImage___parent___internal___type',
  ProfileImageChildren = 'profileImage___children',
  ProfileImageChildrenId = 'profileImage___children___id',
  ProfileImageChildrenParentId = 'profileImage___children___parent___id',
  ProfileImageChildrenParentChildren = 'profileImage___children___parent___children',
  ProfileImageChildrenChildren = 'profileImage___children___children',
  ProfileImageChildrenChildrenId = 'profileImage___children___children___id',
  ProfileImageChildrenChildrenChildren = 'profileImage___children___children___children',
  ProfileImageChildrenInternalContent = 'profileImage___children___internal___content',
  ProfileImageChildrenInternalContentDigest = 'profileImage___children___internal___contentDigest',
  ProfileImageChildrenInternalDescription = 'profileImage___children___internal___description',
  ProfileImageChildrenInternalFieldOwners = 'profileImage___children___internal___fieldOwners',
  ProfileImageChildrenInternalIgnoreType = 'profileImage___children___internal___ignoreType',
  ProfileImageChildrenInternalMediaType = 'profileImage___children___internal___mediaType',
  ProfileImageChildrenInternalOwner = 'profileImage___children___internal___owner',
  ProfileImageChildrenInternalType = 'profileImage___children___internal___type',
  ProfileImageInternalContent = 'profileImage___internal___content',
  ProfileImageInternalContentDigest = 'profileImage___internal___contentDigest',
  ProfileImageInternalDescription = 'profileImage___internal___description',
  ProfileImageInternalFieldOwners = 'profileImage___internal___fieldOwners',
  ProfileImageInternalIgnoreType = 'profileImage___internal___ignoreType',
  ProfileImageInternalMediaType = 'profileImage___internal___mediaType',
  ProfileImageInternalOwner = 'profileImage___internal___owner',
  ProfileImageInternalType = 'profileImage___internal___type',
  ProfileImageContentfulId = 'profileImage___contentful_id',
  ProfileImageFileUrl = 'profileImage___file___url',
  ProfileImageFileDetailsSize = 'profileImage___file___details___size',
  ProfileImageFileFileName = 'profileImage___file___fileName',
  ProfileImageFileContentType = 'profileImage___file___contentType',
  ProfileImageTitle = 'profileImage___title',
  ProfileImageDescription = 'profileImage___description',
  ProfileImageNodeLocale = 'profileImage___node_locale',
  ProfileImageFixedBase64 = 'profileImage___fixed___base64',
  ProfileImageFixedTracedSvg = 'profileImage___fixed___tracedSVG',
  ProfileImageFixedAspectRatio = 'profileImage___fixed___aspectRatio',
  ProfileImageFixedWidth = 'profileImage___fixed___width',
  ProfileImageFixedHeight = 'profileImage___fixed___height',
  ProfileImageFixedSrc = 'profileImage___fixed___src',
  ProfileImageFixedSrcSet = 'profileImage___fixed___srcSet',
  ProfileImageFixedSrcWebp = 'profileImage___fixed___srcWebp',
  ProfileImageFixedSrcSetWebp = 'profileImage___fixed___srcSetWebp',
  ProfileImageResolutionsBase64 = 'profileImage___resolutions___base64',
  ProfileImageResolutionsTracedSvg = 'profileImage___resolutions___tracedSVG',
  ProfileImageResolutionsAspectRatio = 'profileImage___resolutions___aspectRatio',
  ProfileImageResolutionsWidth = 'profileImage___resolutions___width',
  ProfileImageResolutionsHeight = 'profileImage___resolutions___height',
  ProfileImageResolutionsSrc = 'profileImage___resolutions___src',
  ProfileImageResolutionsSrcSet = 'profileImage___resolutions___srcSet',
  ProfileImageResolutionsSrcWebp = 'profileImage___resolutions___srcWebp',
  ProfileImageResolutionsSrcSetWebp = 'profileImage___resolutions___srcSetWebp',
  ProfileImageFluidBase64 = 'profileImage___fluid___base64',
  ProfileImageFluidTracedSvg = 'profileImage___fluid___tracedSVG',
  ProfileImageFluidAspectRatio = 'profileImage___fluid___aspectRatio',
  ProfileImageFluidSrc = 'profileImage___fluid___src',
  ProfileImageFluidSrcSet = 'profileImage___fluid___srcSet',
  ProfileImageFluidSrcWebp = 'profileImage___fluid___srcWebp',
  ProfileImageFluidSrcSetWebp = 'profileImage___fluid___srcSetWebp',
  ProfileImageFluidSizes = 'profileImage___fluid___sizes',
  ProfileImageSizesBase64 = 'profileImage___sizes___base64',
  ProfileImageSizesTracedSvg = 'profileImage___sizes___tracedSVG',
  ProfileImageSizesAspectRatio = 'profileImage___sizes___aspectRatio',
  ProfileImageSizesSrc = 'profileImage___sizes___src',
  ProfileImageSizesSrcSet = 'profileImage___sizes___srcSet',
  ProfileImageSizesSrcWebp = 'profileImage___sizes___srcWebp',
  ProfileImageSizesSrcSetWebp = 'profileImage___sizes___srcSetWebp',
  ProfileImageSizesSizes = 'profileImage___sizes___sizes',
  ProfileImageResizeBase64 = 'profileImage___resize___base64',
  ProfileImageResizeTracedSvg = 'profileImage___resize___tracedSVG',
  ProfileImageResizeSrc = 'profileImage___resize___src',
  ProfileImageResizeWidth = 'profileImage___resize___width',
  ProfileImageResizeHeight = 'profileImage___resize___height',
  ProfileImageResizeAspectRatio = 'profileImage___resize___aspectRatio',
  AboutMeId = 'aboutMe___id',
  AboutMeParentId = 'aboutMe___parent___id',
  AboutMeParentParentId = 'aboutMe___parent___parent___id',
  AboutMeParentParentChildren = 'aboutMe___parent___parent___children',
  AboutMeParentChildren = 'aboutMe___parent___children',
  AboutMeParentChildrenId = 'aboutMe___parent___children___id',
  AboutMeParentChildrenChildren = 'aboutMe___parent___children___children',
  AboutMeParentInternalContent = 'aboutMe___parent___internal___content',
  AboutMeParentInternalContentDigest = 'aboutMe___parent___internal___contentDigest',
  AboutMeParentInternalDescription = 'aboutMe___parent___internal___description',
  AboutMeParentInternalFieldOwners = 'aboutMe___parent___internal___fieldOwners',
  AboutMeParentInternalIgnoreType = 'aboutMe___parent___internal___ignoreType',
  AboutMeParentInternalMediaType = 'aboutMe___parent___internal___mediaType',
  AboutMeParentInternalOwner = 'aboutMe___parent___internal___owner',
  AboutMeParentInternalType = 'aboutMe___parent___internal___type',
  AboutMeChildren = 'aboutMe___children',
  AboutMeChildrenId = 'aboutMe___children___id',
  AboutMeChildrenParentId = 'aboutMe___children___parent___id',
  AboutMeChildrenParentChildren = 'aboutMe___children___parent___children',
  AboutMeChildrenChildren = 'aboutMe___children___children',
  AboutMeChildrenChildrenId = 'aboutMe___children___children___id',
  AboutMeChildrenChildrenChildren = 'aboutMe___children___children___children',
  AboutMeChildrenInternalContent = 'aboutMe___children___internal___content',
  AboutMeChildrenInternalContentDigest = 'aboutMe___children___internal___contentDigest',
  AboutMeChildrenInternalDescription = 'aboutMe___children___internal___description',
  AboutMeChildrenInternalFieldOwners = 'aboutMe___children___internal___fieldOwners',
  AboutMeChildrenInternalIgnoreType = 'aboutMe___children___internal___ignoreType',
  AboutMeChildrenInternalMediaType = 'aboutMe___children___internal___mediaType',
  AboutMeChildrenInternalOwner = 'aboutMe___children___internal___owner',
  AboutMeChildrenInternalType = 'aboutMe___children___internal___type',
  AboutMeInternalContent = 'aboutMe___internal___content',
  AboutMeInternalContentDigest = 'aboutMe___internal___contentDigest',
  AboutMeInternalDescription = 'aboutMe___internal___description',
  AboutMeInternalFieldOwners = 'aboutMe___internal___fieldOwners',
  AboutMeInternalIgnoreType = 'aboutMe___internal___ignoreType',
  AboutMeInternalMediaType = 'aboutMe___internal___mediaType',
  AboutMeInternalOwner = 'aboutMe___internal___owner',
  AboutMeInternalType = 'aboutMe___internal___type',
  AboutMeAboutMe = 'aboutMe___aboutMe',
  AboutMeChildMarkdownRemarkId = 'aboutMe___childMarkdownRemark___id',
  AboutMeChildMarkdownRemarkFrontmatterTitle = 'aboutMe___childMarkdownRemark___frontmatter___title',
  AboutMeChildMarkdownRemarkFrontmatterDate = 'aboutMe___childMarkdownRemark___frontmatter___date',
  AboutMeChildMarkdownRemarkFrontmatterDescription = 'aboutMe___childMarkdownRemark___frontmatter___description',
  AboutMeChildMarkdownRemarkExcerpt = 'aboutMe___childMarkdownRemark___excerpt',
  AboutMeChildMarkdownRemarkRawMarkdownBody = 'aboutMe___childMarkdownRemark___rawMarkdownBody',
  AboutMeChildMarkdownRemarkFileAbsolutePath = 'aboutMe___childMarkdownRemark___fileAbsolutePath',
  AboutMeChildMarkdownRemarkFieldsSlug = 'aboutMe___childMarkdownRemark___fields___slug',
  AboutMeChildMarkdownRemarkHtml = 'aboutMe___childMarkdownRemark___html',
  AboutMeChildMarkdownRemarkHtmlAst = 'aboutMe___childMarkdownRemark___htmlAst',
  AboutMeChildMarkdownRemarkExcerptAst = 'aboutMe___childMarkdownRemark___excerptAst',
  AboutMeChildMarkdownRemarkHeadings = 'aboutMe___childMarkdownRemark___headings',
  AboutMeChildMarkdownRemarkHeadingsId = 'aboutMe___childMarkdownRemark___headings___id',
  AboutMeChildMarkdownRemarkHeadingsValue = 'aboutMe___childMarkdownRemark___headings___value',
  AboutMeChildMarkdownRemarkHeadingsDepth = 'aboutMe___childMarkdownRemark___headings___depth',
  AboutMeChildMarkdownRemarkTimeToRead = 'aboutMe___childMarkdownRemark___timeToRead',
  AboutMeChildMarkdownRemarkTableOfContents = 'aboutMe___childMarkdownRemark___tableOfContents',
  AboutMeChildMarkdownRemarkWordCountParagraphs = 'aboutMe___childMarkdownRemark___wordCount___paragraphs',
  AboutMeChildMarkdownRemarkWordCountSentences = 'aboutMe___childMarkdownRemark___wordCount___sentences',
  AboutMeChildMarkdownRemarkWordCountWords = 'aboutMe___childMarkdownRemark___wordCount___words',
  AboutMeChildMarkdownRemarkParentId = 'aboutMe___childMarkdownRemark___parent___id',
  AboutMeChildMarkdownRemarkParentChildren = 'aboutMe___childMarkdownRemark___parent___children',
  AboutMeChildMarkdownRemarkChildren = 'aboutMe___childMarkdownRemark___children',
  AboutMeChildMarkdownRemarkChildrenId = 'aboutMe___childMarkdownRemark___children___id',
  AboutMeChildMarkdownRemarkChildrenChildren = 'aboutMe___childMarkdownRemark___children___children',
  AboutMeChildMarkdownRemarkInternalContent = 'aboutMe___childMarkdownRemark___internal___content',
  AboutMeChildMarkdownRemarkInternalContentDigest = 'aboutMe___childMarkdownRemark___internal___contentDigest',
  AboutMeChildMarkdownRemarkInternalDescription = 'aboutMe___childMarkdownRemark___internal___description',
  AboutMeChildMarkdownRemarkInternalFieldOwners = 'aboutMe___childMarkdownRemark___internal___fieldOwners',
  AboutMeChildMarkdownRemarkInternalIgnoreType = 'aboutMe___childMarkdownRemark___internal___ignoreType',
  AboutMeChildMarkdownRemarkInternalMediaType = 'aboutMe___childMarkdownRemark___internal___mediaType',
  AboutMeChildMarkdownRemarkInternalOwner = 'aboutMe___childMarkdownRemark___internal___owner',
  AboutMeChildMarkdownRemarkInternalType = 'aboutMe___childMarkdownRemark___internal___type',
  AboutPageId = 'aboutPage___id',
  AboutPageParentId = 'aboutPage___parent___id',
  AboutPageParentParentId = 'aboutPage___parent___parent___id',
  AboutPageParentParentChildren = 'aboutPage___parent___parent___children',
  AboutPageParentChildren = 'aboutPage___parent___children',
  AboutPageParentChildrenId = 'aboutPage___parent___children___id',
  AboutPageParentChildrenChildren = 'aboutPage___parent___children___children',
  AboutPageParentInternalContent = 'aboutPage___parent___internal___content',
  AboutPageParentInternalContentDigest = 'aboutPage___parent___internal___contentDigest',
  AboutPageParentInternalDescription = 'aboutPage___parent___internal___description',
  AboutPageParentInternalFieldOwners = 'aboutPage___parent___internal___fieldOwners',
  AboutPageParentInternalIgnoreType = 'aboutPage___parent___internal___ignoreType',
  AboutPageParentInternalMediaType = 'aboutPage___parent___internal___mediaType',
  AboutPageParentInternalOwner = 'aboutPage___parent___internal___owner',
  AboutPageParentInternalType = 'aboutPage___parent___internal___type',
  AboutPageChildren = 'aboutPage___children',
  AboutPageChildrenId = 'aboutPage___children___id',
  AboutPageChildrenParentId = 'aboutPage___children___parent___id',
  AboutPageChildrenParentChildren = 'aboutPage___children___parent___children',
  AboutPageChildrenChildren = 'aboutPage___children___children',
  AboutPageChildrenChildrenId = 'aboutPage___children___children___id',
  AboutPageChildrenChildrenChildren = 'aboutPage___children___children___children',
  AboutPageChildrenInternalContent = 'aboutPage___children___internal___content',
  AboutPageChildrenInternalContentDigest = 'aboutPage___children___internal___contentDigest',
  AboutPageChildrenInternalDescription = 'aboutPage___children___internal___description',
  AboutPageChildrenInternalFieldOwners = 'aboutPage___children___internal___fieldOwners',
  AboutPageChildrenInternalIgnoreType = 'aboutPage___children___internal___ignoreType',
  AboutPageChildrenInternalMediaType = 'aboutPage___children___internal___mediaType',
  AboutPageChildrenInternalOwner = 'aboutPage___children___internal___owner',
  AboutPageChildrenInternalType = 'aboutPage___children___internal___type',
  AboutPageInternalContent = 'aboutPage___internal___content',
  AboutPageInternalContentDigest = 'aboutPage___internal___contentDigest',
  AboutPageInternalDescription = 'aboutPage___internal___description',
  AboutPageInternalFieldOwners = 'aboutPage___internal___fieldOwners',
  AboutPageInternalIgnoreType = 'aboutPage___internal___ignoreType',
  AboutPageInternalMediaType = 'aboutPage___internal___mediaType',
  AboutPageInternalOwner = 'aboutPage___internal___owner',
  AboutPageInternalType = 'aboutPage___internal___type',
  AboutPageAboutPage = 'aboutPage___aboutPage',
  AboutPageChildMarkdownRemarkId = 'aboutPage___childMarkdownRemark___id',
  AboutPageChildMarkdownRemarkFrontmatterTitle = 'aboutPage___childMarkdownRemark___frontmatter___title',
  AboutPageChildMarkdownRemarkFrontmatterDate = 'aboutPage___childMarkdownRemark___frontmatter___date',
  AboutPageChildMarkdownRemarkFrontmatterDescription = 'aboutPage___childMarkdownRemark___frontmatter___description',
  AboutPageChildMarkdownRemarkExcerpt = 'aboutPage___childMarkdownRemark___excerpt',
  AboutPageChildMarkdownRemarkRawMarkdownBody = 'aboutPage___childMarkdownRemark___rawMarkdownBody',
  AboutPageChildMarkdownRemarkFileAbsolutePath = 'aboutPage___childMarkdownRemark___fileAbsolutePath',
  AboutPageChildMarkdownRemarkFieldsSlug = 'aboutPage___childMarkdownRemark___fields___slug',
  AboutPageChildMarkdownRemarkHtml = 'aboutPage___childMarkdownRemark___html',
  AboutPageChildMarkdownRemarkHtmlAst = 'aboutPage___childMarkdownRemark___htmlAst',
  AboutPageChildMarkdownRemarkExcerptAst = 'aboutPage___childMarkdownRemark___excerptAst',
  AboutPageChildMarkdownRemarkHeadings = 'aboutPage___childMarkdownRemark___headings',
  AboutPageChildMarkdownRemarkHeadingsId = 'aboutPage___childMarkdownRemark___headings___id',
  AboutPageChildMarkdownRemarkHeadingsValue = 'aboutPage___childMarkdownRemark___headings___value',
  AboutPageChildMarkdownRemarkHeadingsDepth = 'aboutPage___childMarkdownRemark___headings___depth',
  AboutPageChildMarkdownRemarkTimeToRead = 'aboutPage___childMarkdownRemark___timeToRead',
  AboutPageChildMarkdownRemarkTableOfContents = 'aboutPage___childMarkdownRemark___tableOfContents',
  AboutPageChildMarkdownRemarkWordCountParagraphs = 'aboutPage___childMarkdownRemark___wordCount___paragraphs',
  AboutPageChildMarkdownRemarkWordCountSentences = 'aboutPage___childMarkdownRemark___wordCount___sentences',
  AboutPageChildMarkdownRemarkWordCountWords = 'aboutPage___childMarkdownRemark___wordCount___words',
  AboutPageChildMarkdownRemarkParentId = 'aboutPage___childMarkdownRemark___parent___id',
  AboutPageChildMarkdownRemarkParentChildren = 'aboutPage___childMarkdownRemark___parent___children',
  AboutPageChildMarkdownRemarkChildren = 'aboutPage___childMarkdownRemark___children',
  AboutPageChildMarkdownRemarkChildrenId = 'aboutPage___childMarkdownRemark___children___id',
  AboutPageChildMarkdownRemarkChildrenChildren = 'aboutPage___childMarkdownRemark___children___children',
  AboutPageChildMarkdownRemarkInternalContent = 'aboutPage___childMarkdownRemark___internal___content',
  AboutPageChildMarkdownRemarkInternalContentDigest = 'aboutPage___childMarkdownRemark___internal___contentDigest',
  AboutPageChildMarkdownRemarkInternalDescription = 'aboutPage___childMarkdownRemark___internal___description',
  AboutPageChildMarkdownRemarkInternalFieldOwners = 'aboutPage___childMarkdownRemark___internal___fieldOwners',
  AboutPageChildMarkdownRemarkInternalIgnoreType = 'aboutPage___childMarkdownRemark___internal___ignoreType',
  AboutPageChildMarkdownRemarkInternalMediaType = 'aboutPage___childMarkdownRemark___internal___mediaType',
  AboutPageChildMarkdownRemarkInternalOwner = 'aboutPage___childMarkdownRemark___internal___owner',
  AboutPageChildMarkdownRemarkInternalType = 'aboutPage___childMarkdownRemark___internal___type',
  SkillsetId = 'skillset___id',
  SkillsetParentId = 'skillset___parent___id',
  SkillsetParentParentId = 'skillset___parent___parent___id',
  SkillsetParentParentChildren = 'skillset___parent___parent___children',
  SkillsetParentChildren = 'skillset___parent___children',
  SkillsetParentChildrenId = 'skillset___parent___children___id',
  SkillsetParentChildrenChildren = 'skillset___parent___children___children',
  SkillsetParentInternalContent = 'skillset___parent___internal___content',
  SkillsetParentInternalContentDigest = 'skillset___parent___internal___contentDigest',
  SkillsetParentInternalDescription = 'skillset___parent___internal___description',
  SkillsetParentInternalFieldOwners = 'skillset___parent___internal___fieldOwners',
  SkillsetParentInternalIgnoreType = 'skillset___parent___internal___ignoreType',
  SkillsetParentInternalMediaType = 'skillset___parent___internal___mediaType',
  SkillsetParentInternalOwner = 'skillset___parent___internal___owner',
  SkillsetParentInternalType = 'skillset___parent___internal___type',
  SkillsetChildren = 'skillset___children',
  SkillsetChildrenId = 'skillset___children___id',
  SkillsetChildrenParentId = 'skillset___children___parent___id',
  SkillsetChildrenParentChildren = 'skillset___children___parent___children',
  SkillsetChildrenChildren = 'skillset___children___children',
  SkillsetChildrenChildrenId = 'skillset___children___children___id',
  SkillsetChildrenChildrenChildren = 'skillset___children___children___children',
  SkillsetChildrenInternalContent = 'skillset___children___internal___content',
  SkillsetChildrenInternalContentDigest = 'skillset___children___internal___contentDigest',
  SkillsetChildrenInternalDescription = 'skillset___children___internal___description',
  SkillsetChildrenInternalFieldOwners = 'skillset___children___internal___fieldOwners',
  SkillsetChildrenInternalIgnoreType = 'skillset___children___internal___ignoreType',
  SkillsetChildrenInternalMediaType = 'skillset___children___internal___mediaType',
  SkillsetChildrenInternalOwner = 'skillset___children___internal___owner',
  SkillsetChildrenInternalType = 'skillset___children___internal___type',
  SkillsetInternalContent = 'skillset___internal___content',
  SkillsetInternalContentDigest = 'skillset___internal___contentDigest',
  SkillsetInternalDescription = 'skillset___internal___description',
  SkillsetInternalFieldOwners = 'skillset___internal___fieldOwners',
  SkillsetInternalIgnoreType = 'skillset___internal___ignoreType',
  SkillsetInternalMediaType = 'skillset___internal___mediaType',
  SkillsetInternalOwner = 'skillset___internal___owner',
  SkillsetInternalType = 'skillset___internal___type',
  SkillsetCore = 'skillset___Core',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  ChildContentfulAboutAboutMeTextNodeId = 'childContentfulAboutAboutMeTextNode___id',
  ChildContentfulAboutAboutMeTextNodeParentId = 'childContentfulAboutAboutMeTextNode___parent___id',
  ChildContentfulAboutAboutMeTextNodeParentParentId = 'childContentfulAboutAboutMeTextNode___parent___parent___id',
  ChildContentfulAboutAboutMeTextNodeParentParentChildren = 'childContentfulAboutAboutMeTextNode___parent___parent___children',
  ChildContentfulAboutAboutMeTextNodeParentChildren = 'childContentfulAboutAboutMeTextNode___parent___children',
  ChildContentfulAboutAboutMeTextNodeParentChildrenId = 'childContentfulAboutAboutMeTextNode___parent___children___id',
  ChildContentfulAboutAboutMeTextNodeParentChildrenChildren = 'childContentfulAboutAboutMeTextNode___parent___children___children',
  ChildContentfulAboutAboutMeTextNodeParentInternalContent = 'childContentfulAboutAboutMeTextNode___parent___internal___content',
  ChildContentfulAboutAboutMeTextNodeParentInternalContentDigest = 'childContentfulAboutAboutMeTextNode___parent___internal___contentDigest',
  ChildContentfulAboutAboutMeTextNodeParentInternalDescription = 'childContentfulAboutAboutMeTextNode___parent___internal___description',
  ChildContentfulAboutAboutMeTextNodeParentInternalFieldOwners = 'childContentfulAboutAboutMeTextNode___parent___internal___fieldOwners',
  ChildContentfulAboutAboutMeTextNodeParentInternalIgnoreType = 'childContentfulAboutAboutMeTextNode___parent___internal___ignoreType',
  ChildContentfulAboutAboutMeTextNodeParentInternalMediaType = 'childContentfulAboutAboutMeTextNode___parent___internal___mediaType',
  ChildContentfulAboutAboutMeTextNodeParentInternalOwner = 'childContentfulAboutAboutMeTextNode___parent___internal___owner',
  ChildContentfulAboutAboutMeTextNodeParentInternalType = 'childContentfulAboutAboutMeTextNode___parent___internal___type',
  ChildContentfulAboutAboutMeTextNodeChildren = 'childContentfulAboutAboutMeTextNode___children',
  ChildContentfulAboutAboutMeTextNodeChildrenId = 'childContentfulAboutAboutMeTextNode___children___id',
  ChildContentfulAboutAboutMeTextNodeChildrenParentId = 'childContentfulAboutAboutMeTextNode___children___parent___id',
  ChildContentfulAboutAboutMeTextNodeChildrenParentChildren = 'childContentfulAboutAboutMeTextNode___children___parent___children',
  ChildContentfulAboutAboutMeTextNodeChildrenChildren = 'childContentfulAboutAboutMeTextNode___children___children',
  ChildContentfulAboutAboutMeTextNodeChildrenChildrenId = 'childContentfulAboutAboutMeTextNode___children___children___id',
  ChildContentfulAboutAboutMeTextNodeChildrenChildrenChildren = 'childContentfulAboutAboutMeTextNode___children___children___children',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalContent = 'childContentfulAboutAboutMeTextNode___children___internal___content',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalContentDigest = 'childContentfulAboutAboutMeTextNode___children___internal___contentDigest',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalDescription = 'childContentfulAboutAboutMeTextNode___children___internal___description',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalFieldOwners = 'childContentfulAboutAboutMeTextNode___children___internal___fieldOwners',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalIgnoreType = 'childContentfulAboutAboutMeTextNode___children___internal___ignoreType',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalMediaType = 'childContentfulAboutAboutMeTextNode___children___internal___mediaType',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalOwner = 'childContentfulAboutAboutMeTextNode___children___internal___owner',
  ChildContentfulAboutAboutMeTextNodeChildrenInternalType = 'childContentfulAboutAboutMeTextNode___children___internal___type',
  ChildContentfulAboutAboutMeTextNodeInternalContent = 'childContentfulAboutAboutMeTextNode___internal___content',
  ChildContentfulAboutAboutMeTextNodeInternalContentDigest = 'childContentfulAboutAboutMeTextNode___internal___contentDigest',
  ChildContentfulAboutAboutMeTextNodeInternalDescription = 'childContentfulAboutAboutMeTextNode___internal___description',
  ChildContentfulAboutAboutMeTextNodeInternalFieldOwners = 'childContentfulAboutAboutMeTextNode___internal___fieldOwners',
  ChildContentfulAboutAboutMeTextNodeInternalIgnoreType = 'childContentfulAboutAboutMeTextNode___internal___ignoreType',
  ChildContentfulAboutAboutMeTextNodeInternalMediaType = 'childContentfulAboutAboutMeTextNode___internal___mediaType',
  ChildContentfulAboutAboutMeTextNodeInternalOwner = 'childContentfulAboutAboutMeTextNode___internal___owner',
  ChildContentfulAboutAboutMeTextNodeInternalType = 'childContentfulAboutAboutMeTextNode___internal___type',
  ChildContentfulAboutAboutMeTextNodeAboutMe = 'childContentfulAboutAboutMeTextNode___aboutMe',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkId = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___id',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkFrontmatterDate = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___frontmatter___date',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkFrontmatterDescription = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___frontmatter___description',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkExcerpt = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerpt',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkFileAbsolutePath = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___fileAbsolutePath',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkFieldsSlug = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___fields___slug',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHtml = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___html',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadings = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___id',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___value',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkParentId = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___parent___id',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkParentChildren = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___parent___children',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkChildren = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___children',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkChildrenId = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___children___id',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___children___children',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalContent = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___content',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___description',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalType = 'childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___type',
  ChildContentfulAboutAboutPageTextNodeId = 'childContentfulAboutAboutPageTextNode___id',
  ChildContentfulAboutAboutPageTextNodeParentId = 'childContentfulAboutAboutPageTextNode___parent___id',
  ChildContentfulAboutAboutPageTextNodeParentParentId = 'childContentfulAboutAboutPageTextNode___parent___parent___id',
  ChildContentfulAboutAboutPageTextNodeParentParentChildren = 'childContentfulAboutAboutPageTextNode___parent___parent___children',
  ChildContentfulAboutAboutPageTextNodeParentChildren = 'childContentfulAboutAboutPageTextNode___parent___children',
  ChildContentfulAboutAboutPageTextNodeParentChildrenId = 'childContentfulAboutAboutPageTextNode___parent___children___id',
  ChildContentfulAboutAboutPageTextNodeParentChildrenChildren = 'childContentfulAboutAboutPageTextNode___parent___children___children',
  ChildContentfulAboutAboutPageTextNodeParentInternalContent = 'childContentfulAboutAboutPageTextNode___parent___internal___content',
  ChildContentfulAboutAboutPageTextNodeParentInternalContentDigest = 'childContentfulAboutAboutPageTextNode___parent___internal___contentDigest',
  ChildContentfulAboutAboutPageTextNodeParentInternalDescription = 'childContentfulAboutAboutPageTextNode___parent___internal___description',
  ChildContentfulAboutAboutPageTextNodeParentInternalFieldOwners = 'childContentfulAboutAboutPageTextNode___parent___internal___fieldOwners',
  ChildContentfulAboutAboutPageTextNodeParentInternalIgnoreType = 'childContentfulAboutAboutPageTextNode___parent___internal___ignoreType',
  ChildContentfulAboutAboutPageTextNodeParentInternalMediaType = 'childContentfulAboutAboutPageTextNode___parent___internal___mediaType',
  ChildContentfulAboutAboutPageTextNodeParentInternalOwner = 'childContentfulAboutAboutPageTextNode___parent___internal___owner',
  ChildContentfulAboutAboutPageTextNodeParentInternalType = 'childContentfulAboutAboutPageTextNode___parent___internal___type',
  ChildContentfulAboutAboutPageTextNodeChildren = 'childContentfulAboutAboutPageTextNode___children',
  ChildContentfulAboutAboutPageTextNodeChildrenId = 'childContentfulAboutAboutPageTextNode___children___id',
  ChildContentfulAboutAboutPageTextNodeChildrenParentId = 'childContentfulAboutAboutPageTextNode___children___parent___id',
  ChildContentfulAboutAboutPageTextNodeChildrenParentChildren = 'childContentfulAboutAboutPageTextNode___children___parent___children',
  ChildContentfulAboutAboutPageTextNodeChildrenChildren = 'childContentfulAboutAboutPageTextNode___children___children',
  ChildContentfulAboutAboutPageTextNodeChildrenChildrenId = 'childContentfulAboutAboutPageTextNode___children___children___id',
  ChildContentfulAboutAboutPageTextNodeChildrenChildrenChildren = 'childContentfulAboutAboutPageTextNode___children___children___children',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalContent = 'childContentfulAboutAboutPageTextNode___children___internal___content',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalContentDigest = 'childContentfulAboutAboutPageTextNode___children___internal___contentDigest',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalDescription = 'childContentfulAboutAboutPageTextNode___children___internal___description',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalFieldOwners = 'childContentfulAboutAboutPageTextNode___children___internal___fieldOwners',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalIgnoreType = 'childContentfulAboutAboutPageTextNode___children___internal___ignoreType',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalMediaType = 'childContentfulAboutAboutPageTextNode___children___internal___mediaType',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalOwner = 'childContentfulAboutAboutPageTextNode___children___internal___owner',
  ChildContentfulAboutAboutPageTextNodeChildrenInternalType = 'childContentfulAboutAboutPageTextNode___children___internal___type',
  ChildContentfulAboutAboutPageTextNodeInternalContent = 'childContentfulAboutAboutPageTextNode___internal___content',
  ChildContentfulAboutAboutPageTextNodeInternalContentDigest = 'childContentfulAboutAboutPageTextNode___internal___contentDigest',
  ChildContentfulAboutAboutPageTextNodeInternalDescription = 'childContentfulAboutAboutPageTextNode___internal___description',
  ChildContentfulAboutAboutPageTextNodeInternalFieldOwners = 'childContentfulAboutAboutPageTextNode___internal___fieldOwners',
  ChildContentfulAboutAboutPageTextNodeInternalIgnoreType = 'childContentfulAboutAboutPageTextNode___internal___ignoreType',
  ChildContentfulAboutAboutPageTextNodeInternalMediaType = 'childContentfulAboutAboutPageTextNode___internal___mediaType',
  ChildContentfulAboutAboutPageTextNodeInternalOwner = 'childContentfulAboutAboutPageTextNode___internal___owner',
  ChildContentfulAboutAboutPageTextNodeInternalType = 'childContentfulAboutAboutPageTextNode___internal___type',
  ChildContentfulAboutAboutPageTextNodeAboutPage = 'childContentfulAboutAboutPageTextNode___aboutPage',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkId = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___id',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkFrontmatterDate = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___frontmatter___date',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkFrontmatterDescription = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___frontmatter___description',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkExcerpt = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___excerpt',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkFileAbsolutePath = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___fileAbsolutePath',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkFieldsSlug = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___fields___slug',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkHtml = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___html',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkHeadings = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___headings',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___headings___id',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___headings___value',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkParentId = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___parent___id',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkParentChildren = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___parent___children',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkChildren = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___children',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkChildrenId = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___children___id',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___children___children',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalContent = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___content',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___description',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulAboutAboutPageTextNodeChildMarkdownRemarkInternalType = 'childContentfulAboutAboutPageTextNode___childMarkdownRemark___internal___type',
  ChildContentfulAboutSkillsetJsonNodeId = 'childContentfulAboutSkillsetJsonNode___id',
  ChildContentfulAboutSkillsetJsonNodeParentId = 'childContentfulAboutSkillsetJsonNode___parent___id',
  ChildContentfulAboutSkillsetJsonNodeParentParentId = 'childContentfulAboutSkillsetJsonNode___parent___parent___id',
  ChildContentfulAboutSkillsetJsonNodeParentParentChildren = 'childContentfulAboutSkillsetJsonNode___parent___parent___children',
  ChildContentfulAboutSkillsetJsonNodeParentChildren = 'childContentfulAboutSkillsetJsonNode___parent___children',
  ChildContentfulAboutSkillsetJsonNodeParentChildrenId = 'childContentfulAboutSkillsetJsonNode___parent___children___id',
  ChildContentfulAboutSkillsetJsonNodeParentChildrenChildren = 'childContentfulAboutSkillsetJsonNode___parent___children___children',
  ChildContentfulAboutSkillsetJsonNodeParentInternalContent = 'childContentfulAboutSkillsetJsonNode___parent___internal___content',
  ChildContentfulAboutSkillsetJsonNodeParentInternalContentDigest = 'childContentfulAboutSkillsetJsonNode___parent___internal___contentDigest',
  ChildContentfulAboutSkillsetJsonNodeParentInternalDescription = 'childContentfulAboutSkillsetJsonNode___parent___internal___description',
  ChildContentfulAboutSkillsetJsonNodeParentInternalFieldOwners = 'childContentfulAboutSkillsetJsonNode___parent___internal___fieldOwners',
  ChildContentfulAboutSkillsetJsonNodeParentInternalIgnoreType = 'childContentfulAboutSkillsetJsonNode___parent___internal___ignoreType',
  ChildContentfulAboutSkillsetJsonNodeParentInternalMediaType = 'childContentfulAboutSkillsetJsonNode___parent___internal___mediaType',
  ChildContentfulAboutSkillsetJsonNodeParentInternalOwner = 'childContentfulAboutSkillsetJsonNode___parent___internal___owner',
  ChildContentfulAboutSkillsetJsonNodeParentInternalType = 'childContentfulAboutSkillsetJsonNode___parent___internal___type',
  ChildContentfulAboutSkillsetJsonNodeChildren = 'childContentfulAboutSkillsetJsonNode___children',
  ChildContentfulAboutSkillsetJsonNodeChildrenId = 'childContentfulAboutSkillsetJsonNode___children___id',
  ChildContentfulAboutSkillsetJsonNodeChildrenParentId = 'childContentfulAboutSkillsetJsonNode___children___parent___id',
  ChildContentfulAboutSkillsetJsonNodeChildrenParentChildren = 'childContentfulAboutSkillsetJsonNode___children___parent___children',
  ChildContentfulAboutSkillsetJsonNodeChildrenChildren = 'childContentfulAboutSkillsetJsonNode___children___children',
  ChildContentfulAboutSkillsetJsonNodeChildrenChildrenId = 'childContentfulAboutSkillsetJsonNode___children___children___id',
  ChildContentfulAboutSkillsetJsonNodeChildrenChildrenChildren = 'childContentfulAboutSkillsetJsonNode___children___children___children',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalContent = 'childContentfulAboutSkillsetJsonNode___children___internal___content',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalContentDigest = 'childContentfulAboutSkillsetJsonNode___children___internal___contentDigest',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalDescription = 'childContentfulAboutSkillsetJsonNode___children___internal___description',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalFieldOwners = 'childContentfulAboutSkillsetJsonNode___children___internal___fieldOwners',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalIgnoreType = 'childContentfulAboutSkillsetJsonNode___children___internal___ignoreType',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalMediaType = 'childContentfulAboutSkillsetJsonNode___children___internal___mediaType',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalOwner = 'childContentfulAboutSkillsetJsonNode___children___internal___owner',
  ChildContentfulAboutSkillsetJsonNodeChildrenInternalType = 'childContentfulAboutSkillsetJsonNode___children___internal___type',
  ChildContentfulAboutSkillsetJsonNodeInternalContent = 'childContentfulAboutSkillsetJsonNode___internal___content',
  ChildContentfulAboutSkillsetJsonNodeInternalContentDigest = 'childContentfulAboutSkillsetJsonNode___internal___contentDigest',
  ChildContentfulAboutSkillsetJsonNodeInternalDescription = 'childContentfulAboutSkillsetJsonNode___internal___description',
  ChildContentfulAboutSkillsetJsonNodeInternalFieldOwners = 'childContentfulAboutSkillsetJsonNode___internal___fieldOwners',
  ChildContentfulAboutSkillsetJsonNodeInternalIgnoreType = 'childContentfulAboutSkillsetJsonNode___internal___ignoreType',
  ChildContentfulAboutSkillsetJsonNodeInternalMediaType = 'childContentfulAboutSkillsetJsonNode___internal___mediaType',
  ChildContentfulAboutSkillsetJsonNodeInternalOwner = 'childContentfulAboutSkillsetJsonNode___internal___owner',
  ChildContentfulAboutSkillsetJsonNodeInternalType = 'childContentfulAboutSkillsetJsonNode___internal___type',
  ChildContentfulAboutSkillsetJsonNodeCore = 'childContentfulAboutSkillsetJsonNode___Core'
}

export type ContentfulAboutFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  profileImage?: Maybe<ContentfulAssetFilterInput>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  aboutPage?: Maybe<ContentfulAboutAboutPageTextNodeFilterInput>;
  skillset?: Maybe<ContentfulAboutSkillsetJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  childContentfulAboutAboutPageTextNode?: Maybe<ContentfulAboutAboutPageTextNodeFilterInput>;
  childContentfulAboutSkillsetJsonNode?: Maybe<ContentfulAboutSkillsetJsonNodeFilterInput>;
};

export type ContentfulAboutGroupConnection = {
  __typename?: 'ContentfulAboutGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutEdge>;
  nodes: Array<ContentfulAbout>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutSkillsetJsonNode = Node & {
  __typename?: 'contentfulAboutSkillsetJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  Core?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAboutSkillsetJsonNodeConnection = {
  __typename?: 'contentfulAboutSkillsetJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutSkillsetJsonNodeEdge>;
  nodes: Array<ContentfulAboutSkillsetJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutSkillsetJsonNodeGroupConnection>;
};


export type ContentfulAboutSkillsetJsonNodeConnectionDistinctArgs = {
  field: ContentfulAboutSkillsetJsonNodeFieldsEnum;
};


export type ContentfulAboutSkillsetJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutSkillsetJsonNodeFieldsEnum;
};

export type ContentfulAboutSkillsetJsonNodeEdge = {
  __typename?: 'contentfulAboutSkillsetJsonNodeEdge';
  next?: Maybe<ContentfulAboutSkillsetJsonNode>;
  node: ContentfulAboutSkillsetJsonNode;
  previous?: Maybe<ContentfulAboutSkillsetJsonNode>;
};

export enum ContentfulAboutSkillsetJsonNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Core = 'Core'
}

export type ContentfulAboutSkillsetJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Core?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutSkillsetJsonNodeGroupConnection = {
  __typename?: 'contentfulAboutSkillsetJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutSkillsetJsonNodeEdge>;
  nodes: Array<ContentfulAboutSkillsetJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutSkillsetJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutSkillsetJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutSys = {
  __typename?: 'ContentfulAboutSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAboutSysContentType>;
};

export type ContentfulAboutSysContentType = {
  __typename?: 'ContentfulAboutSysContentType';
  sys?: Maybe<ContentfulAboutSysContentTypeSys>;
};

export type ContentfulAboutSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAboutSysContentTypeSysFilterInput>;
};

export type ContentfulAboutSysContentTypeSys = {
  __typename?: 'ContentfulAboutSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAboutSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAboutSysContentTypeFilterInput>;
};

export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ContentfulId = 'contentful_id',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsImageHeight = 'file___details___image___height',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost = Node & {
  __typename?: 'ContentfulBlogPost';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  heroImage?: Maybe<ContentfulAsset>;
  body?: Maybe<ContentfulBlogPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNode = Node & {
  __typename?: 'contentfulBlogPostBodyTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  __typename?: 'contentfulBlogPostBodyTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  __typename?: 'contentfulBlogPostBodyTextNodeEdge';
  next?: Maybe<ContentfulBlogPostBodyTextNode>;
  node: ContentfulBlogPostBodyTextNode;
  previous?: Maybe<ContentfulBlogPostBodyTextNode>;
};

export enum ContentfulBlogPostBodyTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Body = 'body',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  __typename?: 'contentfulBlogPostBodyTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostConnection = {
  __typename?: 'ContentfulBlogPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostEdge = {
  __typename?: 'ContentfulBlogPostEdge';
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export enum ContentfulBlogPostFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Slug = 'slug',
  Description = 'description',
  HeroImageId = 'heroImage___id',
  HeroImageParentId = 'heroImage___parent___id',
  HeroImageParentParentId = 'heroImage___parent___parent___id',
  HeroImageParentParentChildren = 'heroImage___parent___parent___children',
  HeroImageParentChildren = 'heroImage___parent___children',
  HeroImageParentChildrenId = 'heroImage___parent___children___id',
  HeroImageParentChildrenChildren = 'heroImage___parent___children___children',
  HeroImageParentInternalContent = 'heroImage___parent___internal___content',
  HeroImageParentInternalContentDigest = 'heroImage___parent___internal___contentDigest',
  HeroImageParentInternalDescription = 'heroImage___parent___internal___description',
  HeroImageParentInternalFieldOwners = 'heroImage___parent___internal___fieldOwners',
  HeroImageParentInternalIgnoreType = 'heroImage___parent___internal___ignoreType',
  HeroImageParentInternalMediaType = 'heroImage___parent___internal___mediaType',
  HeroImageParentInternalOwner = 'heroImage___parent___internal___owner',
  HeroImageParentInternalType = 'heroImage___parent___internal___type',
  HeroImageChildren = 'heroImage___children',
  HeroImageChildrenId = 'heroImage___children___id',
  HeroImageChildrenParentId = 'heroImage___children___parent___id',
  HeroImageChildrenParentChildren = 'heroImage___children___parent___children',
  HeroImageChildrenChildren = 'heroImage___children___children',
  HeroImageChildrenChildrenId = 'heroImage___children___children___id',
  HeroImageChildrenChildrenChildren = 'heroImage___children___children___children',
  HeroImageChildrenInternalContent = 'heroImage___children___internal___content',
  HeroImageChildrenInternalContentDigest = 'heroImage___children___internal___contentDigest',
  HeroImageChildrenInternalDescription = 'heroImage___children___internal___description',
  HeroImageChildrenInternalFieldOwners = 'heroImage___children___internal___fieldOwners',
  HeroImageChildrenInternalIgnoreType = 'heroImage___children___internal___ignoreType',
  HeroImageChildrenInternalMediaType = 'heroImage___children___internal___mediaType',
  HeroImageChildrenInternalOwner = 'heroImage___children___internal___owner',
  HeroImageChildrenInternalType = 'heroImage___children___internal___type',
  HeroImageInternalContent = 'heroImage___internal___content',
  HeroImageInternalContentDigest = 'heroImage___internal___contentDigest',
  HeroImageInternalDescription = 'heroImage___internal___description',
  HeroImageInternalFieldOwners = 'heroImage___internal___fieldOwners',
  HeroImageInternalIgnoreType = 'heroImage___internal___ignoreType',
  HeroImageInternalMediaType = 'heroImage___internal___mediaType',
  HeroImageInternalOwner = 'heroImage___internal___owner',
  HeroImageInternalType = 'heroImage___internal___type',
  HeroImageContentfulId = 'heroImage___contentful_id',
  HeroImageFileUrl = 'heroImage___file___url',
  HeroImageFileDetailsSize = 'heroImage___file___details___size',
  HeroImageFileFileName = 'heroImage___file___fileName',
  HeroImageFileContentType = 'heroImage___file___contentType',
  HeroImageTitle = 'heroImage___title',
  HeroImageDescription = 'heroImage___description',
  HeroImageNodeLocale = 'heroImage___node_locale',
  HeroImageFixedBase64 = 'heroImage___fixed___base64',
  HeroImageFixedTracedSvg = 'heroImage___fixed___tracedSVG',
  HeroImageFixedAspectRatio = 'heroImage___fixed___aspectRatio',
  HeroImageFixedWidth = 'heroImage___fixed___width',
  HeroImageFixedHeight = 'heroImage___fixed___height',
  HeroImageFixedSrc = 'heroImage___fixed___src',
  HeroImageFixedSrcSet = 'heroImage___fixed___srcSet',
  HeroImageFixedSrcWebp = 'heroImage___fixed___srcWebp',
  HeroImageFixedSrcSetWebp = 'heroImage___fixed___srcSetWebp',
  HeroImageResolutionsBase64 = 'heroImage___resolutions___base64',
  HeroImageResolutionsTracedSvg = 'heroImage___resolutions___tracedSVG',
  HeroImageResolutionsAspectRatio = 'heroImage___resolutions___aspectRatio',
  HeroImageResolutionsWidth = 'heroImage___resolutions___width',
  HeroImageResolutionsHeight = 'heroImage___resolutions___height',
  HeroImageResolutionsSrc = 'heroImage___resolutions___src',
  HeroImageResolutionsSrcSet = 'heroImage___resolutions___srcSet',
  HeroImageResolutionsSrcWebp = 'heroImage___resolutions___srcWebp',
  HeroImageResolutionsSrcSetWebp = 'heroImage___resolutions___srcSetWebp',
  HeroImageFluidBase64 = 'heroImage___fluid___base64',
  HeroImageFluidTracedSvg = 'heroImage___fluid___tracedSVG',
  HeroImageFluidAspectRatio = 'heroImage___fluid___aspectRatio',
  HeroImageFluidSrc = 'heroImage___fluid___src',
  HeroImageFluidSrcSet = 'heroImage___fluid___srcSet',
  HeroImageFluidSrcWebp = 'heroImage___fluid___srcWebp',
  HeroImageFluidSrcSetWebp = 'heroImage___fluid___srcSetWebp',
  HeroImageFluidSizes = 'heroImage___fluid___sizes',
  HeroImageSizesBase64 = 'heroImage___sizes___base64',
  HeroImageSizesTracedSvg = 'heroImage___sizes___tracedSVG',
  HeroImageSizesAspectRatio = 'heroImage___sizes___aspectRatio',
  HeroImageSizesSrc = 'heroImage___sizes___src',
  HeroImageSizesSrcSet = 'heroImage___sizes___srcSet',
  HeroImageSizesSrcWebp = 'heroImage___sizes___srcWebp',
  HeroImageSizesSrcSetWebp = 'heroImage___sizes___srcSetWebp',
  HeroImageSizesSizes = 'heroImage___sizes___sizes',
  HeroImageResizeBase64 = 'heroImage___resize___base64',
  HeroImageResizeTracedSvg = 'heroImage___resize___tracedSVG',
  HeroImageResizeSrc = 'heroImage___resize___src',
  HeroImageResizeWidth = 'heroImage___resize___width',
  HeroImageResizeHeight = 'heroImage___resize___height',
  HeroImageResizeAspectRatio = 'heroImage___resize___aspectRatio',
  BodyId = 'body___id',
  BodyParentId = 'body___parent___id',
  BodyParentParentId = 'body___parent___parent___id',
  BodyParentParentChildren = 'body___parent___parent___children',
  BodyParentChildren = 'body___parent___children',
  BodyParentChildrenId = 'body___parent___children___id',
  BodyParentChildrenChildren = 'body___parent___children___children',
  BodyParentInternalContent = 'body___parent___internal___content',
  BodyParentInternalContentDigest = 'body___parent___internal___contentDigest',
  BodyParentInternalDescription = 'body___parent___internal___description',
  BodyParentInternalFieldOwners = 'body___parent___internal___fieldOwners',
  BodyParentInternalIgnoreType = 'body___parent___internal___ignoreType',
  BodyParentInternalMediaType = 'body___parent___internal___mediaType',
  BodyParentInternalOwner = 'body___parent___internal___owner',
  BodyParentInternalType = 'body___parent___internal___type',
  BodyChildren = 'body___children',
  BodyChildrenId = 'body___children___id',
  BodyChildrenParentId = 'body___children___parent___id',
  BodyChildrenParentChildren = 'body___children___parent___children',
  BodyChildrenChildren = 'body___children___children',
  BodyChildrenChildrenId = 'body___children___children___id',
  BodyChildrenChildrenChildren = 'body___children___children___children',
  BodyChildrenInternalContent = 'body___children___internal___content',
  BodyChildrenInternalContentDigest = 'body___children___internal___contentDigest',
  BodyChildrenInternalDescription = 'body___children___internal___description',
  BodyChildrenInternalFieldOwners = 'body___children___internal___fieldOwners',
  BodyChildrenInternalIgnoreType = 'body___children___internal___ignoreType',
  BodyChildrenInternalMediaType = 'body___children___internal___mediaType',
  BodyChildrenInternalOwner = 'body___children___internal___owner',
  BodyChildrenInternalType = 'body___children___internal___type',
  BodyInternalContent = 'body___internal___content',
  BodyInternalContentDigest = 'body___internal___contentDigest',
  BodyInternalDescription = 'body___internal___description',
  BodyInternalFieldOwners = 'body___internal___fieldOwners',
  BodyInternalIgnoreType = 'body___internal___ignoreType',
  BodyInternalMediaType = 'body___internal___mediaType',
  BodyInternalOwner = 'body___internal___owner',
  BodyInternalType = 'body___internal___type',
  BodyBody = 'body___body',
  BodyChildMarkdownRemarkId = 'body___childMarkdownRemark___id',
  BodyChildMarkdownRemarkFrontmatterTitle = 'body___childMarkdownRemark___frontmatter___title',
  BodyChildMarkdownRemarkFrontmatterDate = 'body___childMarkdownRemark___frontmatter___date',
  BodyChildMarkdownRemarkFrontmatterDescription = 'body___childMarkdownRemark___frontmatter___description',
  BodyChildMarkdownRemarkExcerpt = 'body___childMarkdownRemark___excerpt',
  BodyChildMarkdownRemarkRawMarkdownBody = 'body___childMarkdownRemark___rawMarkdownBody',
  BodyChildMarkdownRemarkFileAbsolutePath = 'body___childMarkdownRemark___fileAbsolutePath',
  BodyChildMarkdownRemarkFieldsSlug = 'body___childMarkdownRemark___fields___slug',
  BodyChildMarkdownRemarkHtml = 'body___childMarkdownRemark___html',
  BodyChildMarkdownRemarkHtmlAst = 'body___childMarkdownRemark___htmlAst',
  BodyChildMarkdownRemarkExcerptAst = 'body___childMarkdownRemark___excerptAst',
  BodyChildMarkdownRemarkHeadings = 'body___childMarkdownRemark___headings',
  BodyChildMarkdownRemarkHeadingsId = 'body___childMarkdownRemark___headings___id',
  BodyChildMarkdownRemarkHeadingsValue = 'body___childMarkdownRemark___headings___value',
  BodyChildMarkdownRemarkHeadingsDepth = 'body___childMarkdownRemark___headings___depth',
  BodyChildMarkdownRemarkTimeToRead = 'body___childMarkdownRemark___timeToRead',
  BodyChildMarkdownRemarkTableOfContents = 'body___childMarkdownRemark___tableOfContents',
  BodyChildMarkdownRemarkWordCountParagraphs = 'body___childMarkdownRemark___wordCount___paragraphs',
  BodyChildMarkdownRemarkWordCountSentences = 'body___childMarkdownRemark___wordCount___sentences',
  BodyChildMarkdownRemarkWordCountWords = 'body___childMarkdownRemark___wordCount___words',
  BodyChildMarkdownRemarkParentId = 'body___childMarkdownRemark___parent___id',
  BodyChildMarkdownRemarkParentChildren = 'body___childMarkdownRemark___parent___children',
  BodyChildMarkdownRemarkChildren = 'body___childMarkdownRemark___children',
  BodyChildMarkdownRemarkChildrenId = 'body___childMarkdownRemark___children___id',
  BodyChildMarkdownRemarkChildrenChildren = 'body___childMarkdownRemark___children___children',
  BodyChildMarkdownRemarkInternalContent = 'body___childMarkdownRemark___internal___content',
  BodyChildMarkdownRemarkInternalContentDigest = 'body___childMarkdownRemark___internal___contentDigest',
  BodyChildMarkdownRemarkInternalDescription = 'body___childMarkdownRemark___internal___description',
  BodyChildMarkdownRemarkInternalFieldOwners = 'body___childMarkdownRemark___internal___fieldOwners',
  BodyChildMarkdownRemarkInternalIgnoreType = 'body___childMarkdownRemark___internal___ignoreType',
  BodyChildMarkdownRemarkInternalMediaType = 'body___childMarkdownRemark___internal___mediaType',
  BodyChildMarkdownRemarkInternalOwner = 'body___childMarkdownRemark___internal___owner',
  BodyChildMarkdownRemarkInternalType = 'body___childMarkdownRemark___internal___type',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  ChildContentfulBlogPostBodyTextNodeId = 'childContentfulBlogPostBodyTextNode___id',
  ChildContentfulBlogPostBodyTextNodeParentId = 'childContentfulBlogPostBodyTextNode___parent___id',
  ChildContentfulBlogPostBodyTextNodeParentParentId = 'childContentfulBlogPostBodyTextNode___parent___parent___id',
  ChildContentfulBlogPostBodyTextNodeParentParentChildren = 'childContentfulBlogPostBodyTextNode___parent___parent___children',
  ChildContentfulBlogPostBodyTextNodeParentChildren = 'childContentfulBlogPostBodyTextNode___parent___children',
  ChildContentfulBlogPostBodyTextNodeParentChildrenId = 'childContentfulBlogPostBodyTextNode___parent___children___id',
  ChildContentfulBlogPostBodyTextNodeParentChildrenChildren = 'childContentfulBlogPostBodyTextNode___parent___children___children',
  ChildContentfulBlogPostBodyTextNodeParentInternalContent = 'childContentfulBlogPostBodyTextNode___parent___internal___content',
  ChildContentfulBlogPostBodyTextNodeParentInternalContentDigest = 'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest',
  ChildContentfulBlogPostBodyTextNodeParentInternalDescription = 'childContentfulBlogPostBodyTextNode___parent___internal___description',
  ChildContentfulBlogPostBodyTextNodeParentInternalFieldOwners = 'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners',
  ChildContentfulBlogPostBodyTextNodeParentInternalIgnoreType = 'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType',
  ChildContentfulBlogPostBodyTextNodeParentInternalMediaType = 'childContentfulBlogPostBodyTextNode___parent___internal___mediaType',
  ChildContentfulBlogPostBodyTextNodeParentInternalOwner = 'childContentfulBlogPostBodyTextNode___parent___internal___owner',
  ChildContentfulBlogPostBodyTextNodeParentInternalType = 'childContentfulBlogPostBodyTextNode___parent___internal___type',
  ChildContentfulBlogPostBodyTextNodeChildren = 'childContentfulBlogPostBodyTextNode___children',
  ChildContentfulBlogPostBodyTextNodeChildrenId = 'childContentfulBlogPostBodyTextNode___children___id',
  ChildContentfulBlogPostBodyTextNodeChildrenParentId = 'childContentfulBlogPostBodyTextNode___children___parent___id',
  ChildContentfulBlogPostBodyTextNodeChildrenParentChildren = 'childContentfulBlogPostBodyTextNode___children___parent___children',
  ChildContentfulBlogPostBodyTextNodeChildrenChildren = 'childContentfulBlogPostBodyTextNode___children___children',
  ChildContentfulBlogPostBodyTextNodeChildrenChildrenId = 'childContentfulBlogPostBodyTextNode___children___children___id',
  ChildContentfulBlogPostBodyTextNodeChildrenChildrenChildren = 'childContentfulBlogPostBodyTextNode___children___children___children',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalContent = 'childContentfulBlogPostBodyTextNode___children___internal___content',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalContentDigest = 'childContentfulBlogPostBodyTextNode___children___internal___contentDigest',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalDescription = 'childContentfulBlogPostBodyTextNode___children___internal___description',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalFieldOwners = 'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalIgnoreType = 'childContentfulBlogPostBodyTextNode___children___internal___ignoreType',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalMediaType = 'childContentfulBlogPostBodyTextNode___children___internal___mediaType',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalOwner = 'childContentfulBlogPostBodyTextNode___children___internal___owner',
  ChildContentfulBlogPostBodyTextNodeChildrenInternalType = 'childContentfulBlogPostBodyTextNode___children___internal___type',
  ChildContentfulBlogPostBodyTextNodeInternalContent = 'childContentfulBlogPostBodyTextNode___internal___content',
  ChildContentfulBlogPostBodyTextNodeInternalContentDigest = 'childContentfulBlogPostBodyTextNode___internal___contentDigest',
  ChildContentfulBlogPostBodyTextNodeInternalDescription = 'childContentfulBlogPostBodyTextNode___internal___description',
  ChildContentfulBlogPostBodyTextNodeInternalFieldOwners = 'childContentfulBlogPostBodyTextNode___internal___fieldOwners',
  ChildContentfulBlogPostBodyTextNodeInternalIgnoreType = 'childContentfulBlogPostBodyTextNode___internal___ignoreType',
  ChildContentfulBlogPostBodyTextNodeInternalMediaType = 'childContentfulBlogPostBodyTextNode___internal___mediaType',
  ChildContentfulBlogPostBodyTextNodeInternalOwner = 'childContentfulBlogPostBodyTextNode___internal___owner',
  ChildContentfulBlogPostBodyTextNodeInternalType = 'childContentfulBlogPostBodyTextNode___internal___type',
  ChildContentfulBlogPostBodyTextNodeBody = 'childContentfulBlogPostBodyTextNode___body',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkId = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___id',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkFrontmatterDate = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___date',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkFrontmatterDescription = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___frontmatter___description',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkExcerpt = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerpt',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkFileAbsolutePath = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___fileAbsolutePath',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkFieldsSlug = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___fields___slug',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkHtml = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___html',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkHeadings = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___id',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___value',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkParentId = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___id',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkParentChildren = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___parent___children',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkChildren = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkChildrenId = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___id',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___children___children',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalContent = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___content',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___description',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulBlogPostBodyTextNodeChildMarkdownRemarkInternalType = 'childContentfulBlogPostBodyTextNode___childMarkdownRemark___internal___type'
}

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  __typename?: 'ContentfulBlogPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  __typename?: 'ContentfulBlogPostSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  __typename?: 'ContentfulBlogPostSysContentType';
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  __typename?: 'ContentfulBlogPostSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImage = Node & {
  __typename?: 'ContentfulImage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulImageSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulImageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulImageConnection = {
  __typename?: 'ContentfulImageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageGroupConnection>;
};


export type ContentfulImageConnectionDistinctArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageFieldsEnum;
};

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Face = 'FACE',
  Faces = 'FACES',
  Center = 'CENTER'
}

export type ContentfulImageEdge = {
  __typename?: 'ContentfulImageEdge';
  next?: Maybe<ContentfulImage>;
  node: ContentfulImage;
  previous?: Maybe<ContentfulImage>;
};

export enum ContentfulImageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  ImageId = 'image___id',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageContentfulId = 'image___contentful_id',
  ImageFileUrl = 'image___file___url',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileContentType = 'image___file___contentType',
  ImageTitle = 'image___title',
  ImageDescription = 'image___description',
  ImageNodeLocale = 'image___node_locale',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSrcWebp = 'image___fixed___srcWebp',
  ImageFixedSrcSetWebp = 'image___fixed___srcSetWebp',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSrcWebp = 'image___resolutions___srcWebp',
  ImageResolutionsSrcSetWebp = 'image___resolutions___srcSetWebp',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSrcWebp = 'image___fluid___srcWebp',
  ImageFluidSrcSetWebp = 'image___fluid___srcSetWebp',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSrcWebp = 'image___sizes___srcWebp',
  ImageSizesSrcSetWebp = 'image___sizes___srcSetWebp',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageResizeBase64 = 'image___resize___base64',
  ImageResizeTracedSvg = 'image___resize___tracedSVG',
  ImageResizeSrc = 'image___resize___src',
  ImageResizeWidth = 'image___resize___width',
  ImageResizeHeight = 'image___resize___height',
  ImageResizeAspectRatio = 'image___resize___aspectRatio',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulImageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ContentfulImageGroupConnection = {
  __typename?: 'ContentfulImageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageSys = {
  __typename?: 'ContentfulImageSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulImageSysContentType>;
};

export type ContentfulImageSysContentType = {
  __typename?: 'ContentfulImageSysContentType';
  sys?: Maybe<ContentfulImageSysContentTypeSys>;
};

export type ContentfulImageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulImageSysContentTypeSysFilterInput>;
};

export type ContentfulImageSysContentTypeSys = {
  __typename?: 'ContentfulImageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulImageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulImageSysContentTypeFilterInput>;
};

export type ContentfulProject = Node & {
  __typename?: 'ContentfulProject';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['Date']>;
  repositoryUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  projectUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProjectSys>;
  node_locale?: Maybe<Scalars['String']>;
  techStack?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentfulProjectPublishedDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  __typename?: 'ContentfulProjectConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProjectGroupConnection>;
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  __typename?: 'ContentfulProjectEdge';
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  PublishedDate = 'publishedDate',
  RepositoryUrl = 'repositoryUrl',
  Description = 'description',
  ProjectUrl = 'projectUrl',
  Type = 'type',
  LogoId = 'logo___id',
  LogoParentId = 'logo___parent___id',
  LogoParentParentId = 'logo___parent___parent___id',
  LogoParentParentChildren = 'logo___parent___parent___children',
  LogoParentChildren = 'logo___parent___children',
  LogoParentChildrenId = 'logo___parent___children___id',
  LogoParentChildrenChildren = 'logo___parent___children___children',
  LogoParentInternalContent = 'logo___parent___internal___content',
  LogoParentInternalContentDigest = 'logo___parent___internal___contentDigest',
  LogoParentInternalDescription = 'logo___parent___internal___description',
  LogoParentInternalFieldOwners = 'logo___parent___internal___fieldOwners',
  LogoParentInternalIgnoreType = 'logo___parent___internal___ignoreType',
  LogoParentInternalMediaType = 'logo___parent___internal___mediaType',
  LogoParentInternalOwner = 'logo___parent___internal___owner',
  LogoParentInternalType = 'logo___parent___internal___type',
  LogoChildren = 'logo___children',
  LogoChildrenId = 'logo___children___id',
  LogoChildrenParentId = 'logo___children___parent___id',
  LogoChildrenParentChildren = 'logo___children___parent___children',
  LogoChildrenChildren = 'logo___children___children',
  LogoChildrenChildrenId = 'logo___children___children___id',
  LogoChildrenChildrenChildren = 'logo___children___children___children',
  LogoChildrenInternalContent = 'logo___children___internal___content',
  LogoChildrenInternalContentDigest = 'logo___children___internal___contentDigest',
  LogoChildrenInternalDescription = 'logo___children___internal___description',
  LogoChildrenInternalFieldOwners = 'logo___children___internal___fieldOwners',
  LogoChildrenInternalIgnoreType = 'logo___children___internal___ignoreType',
  LogoChildrenInternalMediaType = 'logo___children___internal___mediaType',
  LogoChildrenInternalOwner = 'logo___children___internal___owner',
  LogoChildrenInternalType = 'logo___children___internal___type',
  LogoInternalContent = 'logo___internal___content',
  LogoInternalContentDigest = 'logo___internal___contentDigest',
  LogoInternalDescription = 'logo___internal___description',
  LogoInternalFieldOwners = 'logo___internal___fieldOwners',
  LogoInternalIgnoreType = 'logo___internal___ignoreType',
  LogoInternalMediaType = 'logo___internal___mediaType',
  LogoInternalOwner = 'logo___internal___owner',
  LogoInternalType = 'logo___internal___type',
  LogoContentfulId = 'logo___contentful_id',
  LogoFileUrl = 'logo___file___url',
  LogoFileDetailsSize = 'logo___file___details___size',
  LogoFileFileName = 'logo___file___fileName',
  LogoFileContentType = 'logo___file___contentType',
  LogoTitle = 'logo___title',
  LogoDescription = 'logo___description',
  LogoNodeLocale = 'logo___node_locale',
  LogoFixedBase64 = 'logo___fixed___base64',
  LogoFixedTracedSvg = 'logo___fixed___tracedSVG',
  LogoFixedAspectRatio = 'logo___fixed___aspectRatio',
  LogoFixedWidth = 'logo___fixed___width',
  LogoFixedHeight = 'logo___fixed___height',
  LogoFixedSrc = 'logo___fixed___src',
  LogoFixedSrcSet = 'logo___fixed___srcSet',
  LogoFixedSrcWebp = 'logo___fixed___srcWebp',
  LogoFixedSrcSetWebp = 'logo___fixed___srcSetWebp',
  LogoResolutionsBase64 = 'logo___resolutions___base64',
  LogoResolutionsTracedSvg = 'logo___resolutions___tracedSVG',
  LogoResolutionsAspectRatio = 'logo___resolutions___aspectRatio',
  LogoResolutionsWidth = 'logo___resolutions___width',
  LogoResolutionsHeight = 'logo___resolutions___height',
  LogoResolutionsSrc = 'logo___resolutions___src',
  LogoResolutionsSrcSet = 'logo___resolutions___srcSet',
  LogoResolutionsSrcWebp = 'logo___resolutions___srcWebp',
  LogoResolutionsSrcSetWebp = 'logo___resolutions___srcSetWebp',
  LogoFluidBase64 = 'logo___fluid___base64',
  LogoFluidTracedSvg = 'logo___fluid___tracedSVG',
  LogoFluidAspectRatio = 'logo___fluid___aspectRatio',
  LogoFluidSrc = 'logo___fluid___src',
  LogoFluidSrcSet = 'logo___fluid___srcSet',
  LogoFluidSrcWebp = 'logo___fluid___srcWebp',
  LogoFluidSrcSetWebp = 'logo___fluid___srcSetWebp',
  LogoFluidSizes = 'logo___fluid___sizes',
  LogoSizesBase64 = 'logo___sizes___base64',
  LogoSizesTracedSvg = 'logo___sizes___tracedSVG',
  LogoSizesAspectRatio = 'logo___sizes___aspectRatio',
  LogoSizesSrc = 'logo___sizes___src',
  LogoSizesSrcSet = 'logo___sizes___srcSet',
  LogoSizesSrcWebp = 'logo___sizes___srcWebp',
  LogoSizesSrcSetWebp = 'logo___sizes___srcSetWebp',
  LogoSizesSizes = 'logo___sizes___sizes',
  LogoResizeBase64 = 'logo___resize___base64',
  LogoResizeTracedSvg = 'logo___resize___tracedSVG',
  LogoResizeSrc = 'logo___resize___src',
  LogoResizeWidth = 'logo___resize___width',
  LogoResizeHeight = 'logo___resize___height',
  LogoResizeAspectRatio = 'logo___resize___aspectRatio',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  TechStack = 'techStack'
}

export type ContentfulProjectFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  publishedDate?: Maybe<DateQueryOperatorInput>;
  repositoryUrl?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  projectUrl?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  techStack?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectGroupConnection = {
  __typename?: 'ContentfulProjectGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  __typename?: 'ContentfulProjectSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProjectSysContentType>;
};

export type ContentfulProjectSysContentType = {
  __typename?: 'ContentfulProjectSysContentType';
  sys?: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  __typename?: 'ContentfulProjectSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProjectSysContentTypeFilterInput>;
};

export type ContentfulReleaseNote = Node & {
  __typename?: 'ContentfulReleaseNote';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  version?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  releaseNotes?: Maybe<ContentfulReleaseNoteReleaseNotesTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulReleaseNoteSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulReleaseNoteReleaseNotesTextNode?: Maybe<ContentfulReleaseNoteReleaseNotesTextNode>;
};


export type ContentfulReleaseNoteDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulReleaseNoteCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulReleaseNoteUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulReleaseNoteConnection = {
  __typename?: 'ContentfulReleaseNoteConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulReleaseNoteEdge>;
  nodes: Array<ContentfulReleaseNote>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulReleaseNoteGroupConnection>;
};


export type ContentfulReleaseNoteConnectionDistinctArgs = {
  field: ContentfulReleaseNoteFieldsEnum;
};


export type ContentfulReleaseNoteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulReleaseNoteFieldsEnum;
};

export type ContentfulReleaseNoteEdge = {
  __typename?: 'ContentfulReleaseNoteEdge';
  next?: Maybe<ContentfulReleaseNote>;
  node: ContentfulReleaseNote;
  previous?: Maybe<ContentfulReleaseNote>;
};

export enum ContentfulReleaseNoteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Version = 'version',
  Date = 'date',
  ReleaseNotesId = 'releaseNotes___id',
  ReleaseNotesParentId = 'releaseNotes___parent___id',
  ReleaseNotesParentParentId = 'releaseNotes___parent___parent___id',
  ReleaseNotesParentParentChildren = 'releaseNotes___parent___parent___children',
  ReleaseNotesParentChildren = 'releaseNotes___parent___children',
  ReleaseNotesParentChildrenId = 'releaseNotes___parent___children___id',
  ReleaseNotesParentChildrenChildren = 'releaseNotes___parent___children___children',
  ReleaseNotesParentInternalContent = 'releaseNotes___parent___internal___content',
  ReleaseNotesParentInternalContentDigest = 'releaseNotes___parent___internal___contentDigest',
  ReleaseNotesParentInternalDescription = 'releaseNotes___parent___internal___description',
  ReleaseNotesParentInternalFieldOwners = 'releaseNotes___parent___internal___fieldOwners',
  ReleaseNotesParentInternalIgnoreType = 'releaseNotes___parent___internal___ignoreType',
  ReleaseNotesParentInternalMediaType = 'releaseNotes___parent___internal___mediaType',
  ReleaseNotesParentInternalOwner = 'releaseNotes___parent___internal___owner',
  ReleaseNotesParentInternalType = 'releaseNotes___parent___internal___type',
  ReleaseNotesChildren = 'releaseNotes___children',
  ReleaseNotesChildrenId = 'releaseNotes___children___id',
  ReleaseNotesChildrenParentId = 'releaseNotes___children___parent___id',
  ReleaseNotesChildrenParentChildren = 'releaseNotes___children___parent___children',
  ReleaseNotesChildrenChildren = 'releaseNotes___children___children',
  ReleaseNotesChildrenChildrenId = 'releaseNotes___children___children___id',
  ReleaseNotesChildrenChildrenChildren = 'releaseNotes___children___children___children',
  ReleaseNotesChildrenInternalContent = 'releaseNotes___children___internal___content',
  ReleaseNotesChildrenInternalContentDigest = 'releaseNotes___children___internal___contentDigest',
  ReleaseNotesChildrenInternalDescription = 'releaseNotes___children___internal___description',
  ReleaseNotesChildrenInternalFieldOwners = 'releaseNotes___children___internal___fieldOwners',
  ReleaseNotesChildrenInternalIgnoreType = 'releaseNotes___children___internal___ignoreType',
  ReleaseNotesChildrenInternalMediaType = 'releaseNotes___children___internal___mediaType',
  ReleaseNotesChildrenInternalOwner = 'releaseNotes___children___internal___owner',
  ReleaseNotesChildrenInternalType = 'releaseNotes___children___internal___type',
  ReleaseNotesInternalContent = 'releaseNotes___internal___content',
  ReleaseNotesInternalContentDigest = 'releaseNotes___internal___contentDigest',
  ReleaseNotesInternalDescription = 'releaseNotes___internal___description',
  ReleaseNotesInternalFieldOwners = 'releaseNotes___internal___fieldOwners',
  ReleaseNotesInternalIgnoreType = 'releaseNotes___internal___ignoreType',
  ReleaseNotesInternalMediaType = 'releaseNotes___internal___mediaType',
  ReleaseNotesInternalOwner = 'releaseNotes___internal___owner',
  ReleaseNotesInternalType = 'releaseNotes___internal___type',
  ReleaseNotesReleaseNotes = 'releaseNotes___releaseNotes',
  ReleaseNotesChildMarkdownRemarkId = 'releaseNotes___childMarkdownRemark___id',
  ReleaseNotesChildMarkdownRemarkFrontmatterTitle = 'releaseNotes___childMarkdownRemark___frontmatter___title',
  ReleaseNotesChildMarkdownRemarkFrontmatterDate = 'releaseNotes___childMarkdownRemark___frontmatter___date',
  ReleaseNotesChildMarkdownRemarkFrontmatterDescription = 'releaseNotes___childMarkdownRemark___frontmatter___description',
  ReleaseNotesChildMarkdownRemarkExcerpt = 'releaseNotes___childMarkdownRemark___excerpt',
  ReleaseNotesChildMarkdownRemarkRawMarkdownBody = 'releaseNotes___childMarkdownRemark___rawMarkdownBody',
  ReleaseNotesChildMarkdownRemarkFileAbsolutePath = 'releaseNotes___childMarkdownRemark___fileAbsolutePath',
  ReleaseNotesChildMarkdownRemarkFieldsSlug = 'releaseNotes___childMarkdownRemark___fields___slug',
  ReleaseNotesChildMarkdownRemarkHtml = 'releaseNotes___childMarkdownRemark___html',
  ReleaseNotesChildMarkdownRemarkHtmlAst = 'releaseNotes___childMarkdownRemark___htmlAst',
  ReleaseNotesChildMarkdownRemarkExcerptAst = 'releaseNotes___childMarkdownRemark___excerptAst',
  ReleaseNotesChildMarkdownRemarkHeadings = 'releaseNotes___childMarkdownRemark___headings',
  ReleaseNotesChildMarkdownRemarkHeadingsId = 'releaseNotes___childMarkdownRemark___headings___id',
  ReleaseNotesChildMarkdownRemarkHeadingsValue = 'releaseNotes___childMarkdownRemark___headings___value',
  ReleaseNotesChildMarkdownRemarkHeadingsDepth = 'releaseNotes___childMarkdownRemark___headings___depth',
  ReleaseNotesChildMarkdownRemarkTimeToRead = 'releaseNotes___childMarkdownRemark___timeToRead',
  ReleaseNotesChildMarkdownRemarkTableOfContents = 'releaseNotes___childMarkdownRemark___tableOfContents',
  ReleaseNotesChildMarkdownRemarkWordCountParagraphs = 'releaseNotes___childMarkdownRemark___wordCount___paragraphs',
  ReleaseNotesChildMarkdownRemarkWordCountSentences = 'releaseNotes___childMarkdownRemark___wordCount___sentences',
  ReleaseNotesChildMarkdownRemarkWordCountWords = 'releaseNotes___childMarkdownRemark___wordCount___words',
  ReleaseNotesChildMarkdownRemarkParentId = 'releaseNotes___childMarkdownRemark___parent___id',
  ReleaseNotesChildMarkdownRemarkParentChildren = 'releaseNotes___childMarkdownRemark___parent___children',
  ReleaseNotesChildMarkdownRemarkChildren = 'releaseNotes___childMarkdownRemark___children',
  ReleaseNotesChildMarkdownRemarkChildrenId = 'releaseNotes___childMarkdownRemark___children___id',
  ReleaseNotesChildMarkdownRemarkChildrenChildren = 'releaseNotes___childMarkdownRemark___children___children',
  ReleaseNotesChildMarkdownRemarkInternalContent = 'releaseNotes___childMarkdownRemark___internal___content',
  ReleaseNotesChildMarkdownRemarkInternalContentDigest = 'releaseNotes___childMarkdownRemark___internal___contentDigest',
  ReleaseNotesChildMarkdownRemarkInternalDescription = 'releaseNotes___childMarkdownRemark___internal___description',
  ReleaseNotesChildMarkdownRemarkInternalFieldOwners = 'releaseNotes___childMarkdownRemark___internal___fieldOwners',
  ReleaseNotesChildMarkdownRemarkInternalIgnoreType = 'releaseNotes___childMarkdownRemark___internal___ignoreType',
  ReleaseNotesChildMarkdownRemarkInternalMediaType = 'releaseNotes___childMarkdownRemark___internal___mediaType',
  ReleaseNotesChildMarkdownRemarkInternalOwner = 'releaseNotes___childMarkdownRemark___internal___owner',
  ReleaseNotesChildMarkdownRemarkInternalType = 'releaseNotes___childMarkdownRemark___internal___type',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  ChildContentfulReleaseNoteReleaseNotesTextNodeId = 'childContentfulReleaseNoteReleaseNotesTextNode___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentId = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentParentId = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___parent___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentParentChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___parent___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentChildrenId = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___children___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentChildrenChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___children___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalContent = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___content',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalContentDigest = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___contentDigest',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalDescription = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___description',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalFieldOwners = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___fieldOwners',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalIgnoreType = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___ignoreType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalMediaType = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___mediaType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalOwner = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___owner',
  ChildContentfulReleaseNoteReleaseNotesTextNodeParentInternalType = 'childContentfulReleaseNoteReleaseNotesTextNode___parent___internal___type',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenId = 'childContentfulReleaseNoteReleaseNotesTextNode___children___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenParentId = 'childContentfulReleaseNoteReleaseNotesTextNode___children___parent___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenParentChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___children___parent___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___children___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenChildrenId = 'childContentfulReleaseNoteReleaseNotesTextNode___children___children___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenChildrenChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___children___children___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalContent = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___content',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalContentDigest = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___contentDigest',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalDescription = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___description',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalFieldOwners = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___fieldOwners',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalIgnoreType = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___ignoreType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalMediaType = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___mediaType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalOwner = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___owner',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildrenInternalType = 'childContentfulReleaseNoteReleaseNotesTextNode___children___internal___type',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalContent = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___content',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalContentDigest = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___contentDigest',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalDescription = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___description',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalFieldOwners = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___fieldOwners',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalIgnoreType = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___ignoreType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalMediaType = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___mediaType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalOwner = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___owner',
  ChildContentfulReleaseNoteReleaseNotesTextNodeInternalType = 'childContentfulReleaseNoteReleaseNotesTextNode___internal___type',
  ChildContentfulReleaseNoteReleaseNotesTextNodeReleaseNotes = 'childContentfulReleaseNoteReleaseNotesTextNode___releaseNotes',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkId = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkFrontmatterDate = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___frontmatter___date',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkFrontmatterDescription = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___frontmatter___description',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkExcerpt = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___excerpt',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkFileAbsolutePath = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___fileAbsolutePath',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkFieldsSlug = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___fields___slug',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkHtml = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___html',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkHeadings = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___headings',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___headings___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___headings___value',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkParentId = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___parent___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkParentChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___parent___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkChildrenId = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___children___id',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___children___children',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalContent = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___content',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___description',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulReleaseNoteReleaseNotesTextNodeChildMarkdownRemarkInternalType = 'childContentfulReleaseNoteReleaseNotesTextNode___childMarkdownRemark___internal___type'
}

export type ContentfulReleaseNoteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  version?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  releaseNotes?: Maybe<ContentfulReleaseNoteReleaseNotesTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulReleaseNoteSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulReleaseNoteReleaseNotesTextNode?: Maybe<ContentfulReleaseNoteReleaseNotesTextNodeFilterInput>;
};

export type ContentfulReleaseNoteGroupConnection = {
  __typename?: 'ContentfulReleaseNoteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulReleaseNoteEdge>;
  nodes: Array<ContentfulReleaseNote>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulReleaseNoteReleaseNotesTextNode = Node & {
  __typename?: 'contentfulReleaseNoteReleaseNotesTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  releaseNotes?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulReleaseNoteReleaseNotesTextNodeConnection = {
  __typename?: 'contentfulReleaseNoteReleaseNotesTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulReleaseNoteReleaseNotesTextNodeEdge>;
  nodes: Array<ContentfulReleaseNoteReleaseNotesTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulReleaseNoteReleaseNotesTextNodeGroupConnection>;
};


export type ContentfulReleaseNoteReleaseNotesTextNodeConnectionDistinctArgs = {
  field: ContentfulReleaseNoteReleaseNotesTextNodeFieldsEnum;
};


export type ContentfulReleaseNoteReleaseNotesTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulReleaseNoteReleaseNotesTextNodeFieldsEnum;
};

export type ContentfulReleaseNoteReleaseNotesTextNodeEdge = {
  __typename?: 'contentfulReleaseNoteReleaseNotesTextNodeEdge';
  next?: Maybe<ContentfulReleaseNoteReleaseNotesTextNode>;
  node: ContentfulReleaseNoteReleaseNotesTextNode;
  previous?: Maybe<ContentfulReleaseNoteReleaseNotesTextNode>;
};

export enum ContentfulReleaseNoteReleaseNotesTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ReleaseNotes = 'releaseNotes',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type ContentfulReleaseNoteReleaseNotesTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  releaseNotes?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulReleaseNoteReleaseNotesTextNodeGroupConnection = {
  __typename?: 'contentfulReleaseNoteReleaseNotesTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulReleaseNoteReleaseNotesTextNodeEdge>;
  nodes: Array<ContentfulReleaseNoteReleaseNotesTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulReleaseNoteReleaseNotesTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulReleaseNoteReleaseNotesTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulReleaseNoteSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulReleaseNoteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulReleaseNoteSys = {
  __typename?: 'ContentfulReleaseNoteSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulReleaseNoteSysContentType>;
};

export type ContentfulReleaseNoteSysContentType = {
  __typename?: 'ContentfulReleaseNoteSysContentType';
  sys?: Maybe<ContentfulReleaseNoteSysContentTypeSys>;
};

export type ContentfulReleaseNoteSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulReleaseNoteSysContentTypeSysFilterInput>;
};

export type ContentfulReleaseNoteSysContentTypeSys = {
  __typename?: 'ContentfulReleaseNoteSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulReleaseNoteSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulReleaseNoteSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulReleaseNoteSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadata = Node & {
  __typename?: 'ContentfulSiteMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  siteMetadata?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSiteMetadataSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulSiteMetadataSiteMetadataJsonNode?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNode>;
};


export type ContentfulSiteMetadataCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSiteMetadataUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataConnection = {
  __typename?: 'ContentfulSiteMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteMetadataEdge>;
  nodes: Array<ContentfulSiteMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSiteMetadataGroupConnection>;
};


export type ContentfulSiteMetadataConnectionDistinctArgs = {
  field: ContentfulSiteMetadataFieldsEnum;
};


export type ContentfulSiteMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSiteMetadataFieldsEnum;
};

export type ContentfulSiteMetadataEdge = {
  __typename?: 'ContentfulSiteMetadataEdge';
  next?: Maybe<ContentfulSiteMetadata>;
  node: ContentfulSiteMetadata;
  previous?: Maybe<ContentfulSiteMetadata>;
};

export enum ContentfulSiteMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  SiteMetadataId = 'siteMetadata___id',
  SiteMetadataParentId = 'siteMetadata___parent___id',
  SiteMetadataParentParentId = 'siteMetadata___parent___parent___id',
  SiteMetadataParentParentChildren = 'siteMetadata___parent___parent___children',
  SiteMetadataParentChildren = 'siteMetadata___parent___children',
  SiteMetadataParentChildrenId = 'siteMetadata___parent___children___id',
  SiteMetadataParentChildrenChildren = 'siteMetadata___parent___children___children',
  SiteMetadataParentInternalContent = 'siteMetadata___parent___internal___content',
  SiteMetadataParentInternalContentDigest = 'siteMetadata___parent___internal___contentDigest',
  SiteMetadataParentInternalDescription = 'siteMetadata___parent___internal___description',
  SiteMetadataParentInternalFieldOwners = 'siteMetadata___parent___internal___fieldOwners',
  SiteMetadataParentInternalIgnoreType = 'siteMetadata___parent___internal___ignoreType',
  SiteMetadataParentInternalMediaType = 'siteMetadata___parent___internal___mediaType',
  SiteMetadataParentInternalOwner = 'siteMetadata___parent___internal___owner',
  SiteMetadataParentInternalType = 'siteMetadata___parent___internal___type',
  SiteMetadataChildren = 'siteMetadata___children',
  SiteMetadataChildrenId = 'siteMetadata___children___id',
  SiteMetadataChildrenParentId = 'siteMetadata___children___parent___id',
  SiteMetadataChildrenParentChildren = 'siteMetadata___children___parent___children',
  SiteMetadataChildrenChildren = 'siteMetadata___children___children',
  SiteMetadataChildrenChildrenId = 'siteMetadata___children___children___id',
  SiteMetadataChildrenChildrenChildren = 'siteMetadata___children___children___children',
  SiteMetadataChildrenInternalContent = 'siteMetadata___children___internal___content',
  SiteMetadataChildrenInternalContentDigest = 'siteMetadata___children___internal___contentDigest',
  SiteMetadataChildrenInternalDescription = 'siteMetadata___children___internal___description',
  SiteMetadataChildrenInternalFieldOwners = 'siteMetadata___children___internal___fieldOwners',
  SiteMetadataChildrenInternalIgnoreType = 'siteMetadata___children___internal___ignoreType',
  SiteMetadataChildrenInternalMediaType = 'siteMetadata___children___internal___mediaType',
  SiteMetadataChildrenInternalOwner = 'siteMetadata___children___internal___owner',
  SiteMetadataChildrenInternalType = 'siteMetadata___children___internal___type',
  SiteMetadataInternalContent = 'siteMetadata___internal___content',
  SiteMetadataInternalContentDigest = 'siteMetadata___internal___contentDigest',
  SiteMetadataInternalDescription = 'siteMetadata___internal___description',
  SiteMetadataInternalFieldOwners = 'siteMetadata___internal___fieldOwners',
  SiteMetadataInternalIgnoreType = 'siteMetadata___internal___ignoreType',
  SiteMetadataInternalMediaType = 'siteMetadata___internal___mediaType',
  SiteMetadataInternalOwner = 'siteMetadata___internal___owner',
  SiteMetadataInternalType = 'siteMetadata___internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataPathPrefix = 'siteMetadata___pathPrefix',
  SiteMetadataSiteTitle = 'siteMetadata___siteTitle',
  SiteMetadataSiteTitleAlt = 'siteMetadata___siteTitleAlt',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataSiteLanguage = 'siteMetadata___siteLanguage',
  SiteMetadataSiteDescription = 'siteMetadata___siteDescription',
  SiteMetadataOgLanguage = 'siteMetadata___ogLanguage',
  SiteMetadataGoogleAnalyticsId = 'siteMetadata___googleAnalyticsID',
  SiteMetadataMenuLinks = 'siteMetadata___menuLinks',
  SiteMetadataMenuLinksLink = 'siteMetadata___menuLinks___link',
  SiteMetadataMenuLinksName = 'siteMetadata___menuLinks___name',
  SiteMetadataSocialLinks = 'siteMetadata___socialLinks',
  SiteMetadataSocialLinksIcon = 'siteMetadata___socialLinks___icon',
  SiteMetadataSocialLinksLink = 'siteMetadata___socialLinks___link',
  SiteMetadataSocialLinksName = 'siteMetadata___socialLinks___name',
  SiteMetadataResumeLinkIcon = 'siteMetadata___resumeLink___icon',
  SiteMetadataResumeLinkLink = 'siteMetadata___resumeLink___link',
  SiteMetadataResumeLinkName = 'siteMetadata___resumeLink___name',
  SiteMetadataEmailValue = 'siteMetadata___email___value',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeId = 'childContentfulSiteMetadataSiteMetadataJsonNode___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentId = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentParentId = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___parent___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentParentChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___parent___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentChildrenId = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___children___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentChildrenChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___children___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalContent = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___content',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalContentDigest = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___contentDigest',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalDescription = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___description',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalFieldOwners = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___fieldOwners',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalIgnoreType = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___ignoreType',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalMediaType = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___mediaType',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalOwner = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___owner',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeParentInternalType = 'childContentfulSiteMetadataSiteMetadataJsonNode___parent___internal___type',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenId = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenParentId = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___parent___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenParentChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___parent___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenChildrenId = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___children___id',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenChildrenChildren = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___children___children',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalContent = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___content',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalContentDigest = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___contentDigest',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalDescription = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___description',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalFieldOwners = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___fieldOwners',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalIgnoreType = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___ignoreType',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalMediaType = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___mediaType',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalOwner = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___owner',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeChildrenInternalType = 'childContentfulSiteMetadataSiteMetadataJsonNode___children___internal___type',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalContent = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___content',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalContentDigest = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___contentDigest',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalDescription = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___description',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalFieldOwners = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___fieldOwners',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalIgnoreType = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___ignoreType',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalMediaType = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___mediaType',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalOwner = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___owner',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeInternalType = 'childContentfulSiteMetadataSiteMetadataJsonNode___internal___type',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeTitle = 'childContentfulSiteMetadataSiteMetadataJsonNode___title',
  ChildContentfulSiteMetadataSiteMetadataJsonNodePathPrefix = 'childContentfulSiteMetadataSiteMetadataJsonNode___pathPrefix',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSiteTitle = 'childContentfulSiteMetadataSiteMetadataJsonNode___siteTitle',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSiteTitleAlt = 'childContentfulSiteMetadataSiteMetadataJsonNode___siteTitleAlt',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSiteUrl = 'childContentfulSiteMetadataSiteMetadataJsonNode___siteUrl',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSiteLanguage = 'childContentfulSiteMetadataSiteMetadataJsonNode___siteLanguage',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSiteDescription = 'childContentfulSiteMetadataSiteMetadataJsonNode___siteDescription',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeOgLanguage = 'childContentfulSiteMetadataSiteMetadataJsonNode___ogLanguage',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeGoogleAnalyticsId = 'childContentfulSiteMetadataSiteMetadataJsonNode___googleAnalyticsID',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeMenuLinks = 'childContentfulSiteMetadataSiteMetadataJsonNode___menuLinks',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksLink = 'childContentfulSiteMetadataSiteMetadataJsonNode___menuLinks___link',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksName = 'childContentfulSiteMetadataSiteMetadataJsonNode___menuLinks___name',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks = 'childContentfulSiteMetadataSiteMetadataJsonNode___socialLinks',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksIcon = 'childContentfulSiteMetadataSiteMetadataJsonNode___socialLinks___icon',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksLink = 'childContentfulSiteMetadataSiteMetadataJsonNode___socialLinks___link',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksName = 'childContentfulSiteMetadataSiteMetadataJsonNode___socialLinks___name',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeResumeLinkIcon = 'childContentfulSiteMetadataSiteMetadataJsonNode___resumeLink___icon',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeResumeLinkLink = 'childContentfulSiteMetadataSiteMetadataJsonNode___resumeLink___link',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeResumeLinkName = 'childContentfulSiteMetadataSiteMetadataJsonNode___resumeLink___name',
  ChildContentfulSiteMetadataSiteMetadataJsonNodeEmailValue = 'childContentfulSiteMetadataSiteMetadataJsonNode___email___value'
}

export type ContentfulSiteMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  siteMetadata?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSiteMetadataSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulSiteMetadataSiteMetadataJsonNode?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeFilterInput>;
};

export type ContentfulSiteMetadataGroupConnection = {
  __typename?: 'ContentfulSiteMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteMetadataEdge>;
  nodes: Array<ContentfulSiteMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNode = Node & {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  siteTitleAlt?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  siteLanguage?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  ogLanguage?: Maybe<Scalars['String']>;
  googleAnalyticsID?: Maybe<Scalars['String']>;
  menuLinks?: Maybe<Array<Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinks>>>;
  socialLinks?: Maybe<Array<Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks>>>;
  resumeLink?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink>;
  email?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeEmail>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeConnection = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteMetadataSiteMetadataJsonNodeEdge>;
  nodes: Array<ContentfulSiteMetadataSiteMetadataJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSiteMetadataSiteMetadataJsonNodeGroupConnection>;
};


export type ContentfulSiteMetadataSiteMetadataJsonNodeConnectionDistinctArgs = {
  field: ContentfulSiteMetadataSiteMetadataJsonNodeFieldsEnum;
};


export type ContentfulSiteMetadataSiteMetadataJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSiteMetadataSiteMetadataJsonNodeFieldsEnum;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeEdge = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeEdge';
  next?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNode>;
  node: ContentfulSiteMetadataSiteMetadataJsonNode;
  previous?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNode>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeEmail = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeEmail';
  value?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeEmailFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
};

export enum ContentfulSiteMetadataSiteMetadataJsonNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  PathPrefix = 'pathPrefix',
  SiteTitle = 'siteTitle',
  SiteTitleAlt = 'siteTitleAlt',
  SiteUrl = 'siteUrl',
  SiteLanguage = 'siteLanguage',
  SiteDescription = 'siteDescription',
  OgLanguage = 'ogLanguage',
  GoogleAnalyticsId = 'googleAnalyticsID',
  MenuLinks = 'menuLinks',
  MenuLinksLink = 'menuLinks___link',
  MenuLinksName = 'menuLinks___name',
  SocialLinks = 'socialLinks',
  SocialLinksIcon = 'socialLinks___icon',
  SocialLinksLink = 'socialLinks___link',
  SocialLinksName = 'socialLinks___name',
  ResumeLinkIcon = 'resumeLink___icon',
  ResumeLinkLink = 'resumeLink___link',
  ResumeLinkName = 'resumeLink___name',
  EmailValue = 'email___value'
}

export type ContentfulSiteMetadataSiteMetadataJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  siteTitle?: Maybe<StringQueryOperatorInput>;
  siteTitleAlt?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
  siteDescription?: Maybe<StringQueryOperatorInput>;
  ogLanguage?: Maybe<StringQueryOperatorInput>;
  googleAnalyticsID?: Maybe<StringQueryOperatorInput>;
  menuLinks?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksFilterListInput>;
  socialLinks?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksFilterListInput>;
  resumeLink?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeResumeLinkFilterInput>;
  email?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeEmailFilterInput>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeGroupConnection = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteMetadataSiteMetadataJsonNodeEdge>;
  nodes: Array<ContentfulSiteMetadataSiteMetadataJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinks = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeMenuLinks';
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksFilterListInput = {
  elemMatch?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksFilterInput>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeResumeLink';
  icon?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeResumeLinkFilterInput = {
  icon?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks = {
  __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeSocialLinks';
  icon?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksFilterInput = {
  icon?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksFilterListInput = {
  elemMatch?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksFilterInput>;
};

export type ContentfulSiteMetadataSiteMetadataJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSiteMetadataSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSiteMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSiteMetadataSys = {
  __typename?: 'ContentfulSiteMetadataSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSiteMetadataSysContentType>;
};

export type ContentfulSiteMetadataSysContentType = {
  __typename?: 'ContentfulSiteMetadataSysContentType';
  sys?: Maybe<ContentfulSiteMetadataSysContentTypeSys>;
};

export type ContentfulSiteMetadataSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSiteMetadataSysContentTypeSysFilterInput>;
};

export type ContentfulSiteMetadataSysContentTypeSys = {
  __typename?: 'ContentfulSiteMetadataSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadataSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSiteMetadataSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  Fill = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE'
}

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  slug?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterDescription = 'frontmatter___description',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulReleaseNoteReleaseNotesTextNode?: Maybe<ContentfulReleaseNoteReleaseNotesTextNode>;
  allContentfulReleaseNoteReleaseNotesTextNode: ContentfulReleaseNoteReleaseNotesTextNodeConnection;
  contentfulReleaseNote?: Maybe<ContentfulReleaseNote>;
  allContentfulReleaseNote: ContentfulReleaseNoteConnection;
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulSiteMetadataSiteMetadataJsonNode?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNode>;
  allContentfulSiteMetadataSiteMetadataJsonNode: ContentfulSiteMetadataSiteMetadataJsonNodeConnection;
  contentfulSiteMetadata?: Maybe<ContentfulSiteMetadata>;
  allContentfulSiteMetadata: ContentfulSiteMetadataConnection;
  contentfulAboutSkillsetJsonNode?: Maybe<ContentfulAboutSkillsetJsonNode>;
  allContentfulAboutSkillsetJsonNode: ContentfulAboutSkillsetJsonNodeConnection;
  contentfulAboutAboutPageTextNode?: Maybe<ContentfulAboutAboutPageTextNode>;
  allContentfulAboutAboutPageTextNode: ContentfulAboutAboutPageTextNodeConnection;
  contentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNode>;
  allContentfulAboutAboutMeTextNode: ContentfulAboutAboutMeTextNodeConnection;
  contentfulAbout?: Maybe<ContentfulAbout>;
  allContentfulAbout: ContentfulAboutConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulImage?: Maybe<ContentfulImage>;
  allContentfulImage: ContentfulImageConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulReleaseNoteReleaseNotesTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  releaseNotes?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulReleaseNoteReleaseNotesTextNodeArgs = {
  filter?: Maybe<ContentfulReleaseNoteReleaseNotesTextNodeFilterInput>;
  sort?: Maybe<ContentfulReleaseNoteReleaseNotesTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulReleaseNoteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  version?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  releaseNotes?: Maybe<ContentfulReleaseNoteReleaseNotesTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulReleaseNoteSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulReleaseNoteReleaseNotesTextNode?: Maybe<ContentfulReleaseNoteReleaseNotesTextNodeFilterInput>;
};


export type QueryAllContentfulReleaseNoteArgs = {
  filter?: Maybe<ContentfulReleaseNoteFilterInput>;
  sort?: Maybe<ContentfulReleaseNoteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSiteMetadataSiteMetadataJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  siteTitle?: Maybe<StringQueryOperatorInput>;
  siteTitleAlt?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
  siteDescription?: Maybe<StringQueryOperatorInput>;
  ogLanguage?: Maybe<StringQueryOperatorInput>;
  googleAnalyticsID?: Maybe<StringQueryOperatorInput>;
  menuLinks?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinksFilterListInput>;
  socialLinks?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinksFilterListInput>;
  resumeLink?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeResumeLinkFilterInput>;
  email?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeEmailFilterInput>;
};


export type QueryAllContentfulSiteMetadataSiteMetadataJsonNodeArgs = {
  filter?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeFilterInput>;
  sort?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSiteMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  siteMetadata?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSiteMetadataSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulSiteMetadataSiteMetadataJsonNode?: Maybe<ContentfulSiteMetadataSiteMetadataJsonNodeFilterInput>;
};


export type QueryAllContentfulSiteMetadataArgs = {
  filter?: Maybe<ContentfulSiteMetadataFilterInput>;
  sort?: Maybe<ContentfulSiteMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutSkillsetJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  Core?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAboutSkillsetJsonNodeArgs = {
  filter?: Maybe<ContentfulAboutSkillsetJsonNodeFilterInput>;
  sort?: Maybe<ContentfulAboutSkillsetJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutAboutPageTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutPage?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAboutAboutPageTextNodeArgs = {
  filter?: Maybe<ContentfulAboutAboutPageTextNodeFilterInput>;
  sort?: Maybe<ContentfulAboutAboutPageTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutAboutMeTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  aboutMe?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAboutAboutMeTextNodeArgs = {
  filter?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  sort?: Maybe<ContentfulAboutAboutMeTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAboutArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  profileImage?: Maybe<ContentfulAssetFilterInput>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  aboutPage?: Maybe<ContentfulAboutAboutPageTextNodeFilterInput>;
  skillset?: Maybe<ContentfulAboutSkillsetJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAboutSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  childContentfulAboutAboutPageTextNode?: Maybe<ContentfulAboutAboutPageTextNodeFilterInput>;
  childContentfulAboutSkillsetJsonNode?: Maybe<ContentfulAboutSkillsetJsonNodeFilterInput>;
};


export type QueryAllContentfulAboutArgs = {
  filter?: Maybe<ContentfulAboutFilterInput>;
  sort?: Maybe<ContentfulAboutSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProjectArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  publishedDate?: Maybe<DateQueryOperatorInput>;
  repositoryUrl?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  projectUrl?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProjectSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  techStack?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulImageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulImageArgs = {
  filter?: Maybe<ContentfulImageFilterInput>;
  sort?: Maybe<ContentfulImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsHead = 'pluginCreator___pluginOptions___head',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsInlineCodeMarker = 'pluginCreator___pluginOptions___inlineCodeMarker',
  PluginCreatorPluginOptionsSpaceId = 'pluginCreator___pluginOptions___spaceId',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsLogo = 'pluginCreator___pluginOptions___logo',
  PluginCreatorPluginOptionsInjectHtml = 'pluginCreator___pluginOptions___injectHTML',
  PluginCreatorPluginOptionsIconsAndroid = 'pluginCreator___pluginOptions___icons___android',
  PluginCreatorPluginOptionsIconsAppleIcon = 'pluginCreator___pluginOptions___icons___appleIcon',
  PluginCreatorPluginOptionsIconsAppleStartup = 'pluginCreator___pluginOptions___icons___appleStartup',
  PluginCreatorPluginOptionsIconsCoast = 'pluginCreator___pluginOptions___icons___coast',
  PluginCreatorPluginOptionsIconsFavicons = 'pluginCreator___pluginOptions___icons___favicons',
  PluginCreatorPluginOptionsIconsFirefox = 'pluginCreator___pluginOptions___icons___firefox',
  PluginCreatorPluginOptionsIconsTwitter = 'pluginCreator___pluginOptions___icons___twitter',
  PluginCreatorPluginOptionsIconsYandex = 'pluginCreator___pluginOptions___icons___yandex',
  PluginCreatorPluginOptionsIconsWindows = 'pluginCreator___pluginOptions___icons___windows',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsInlineCodeMarker = 'pluginOptions___plugins___pluginOptions___inlineCodeMarker',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsHead = 'pluginOptions___head',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsInlineCodeMarker = 'pluginOptions___inlineCodeMarker',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsLogo = 'pluginOptions___logo',
  PluginOptionsInjectHtml = 'pluginOptions___injectHTML',
  PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
  PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
  PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
  PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
  PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
  PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
  PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
  PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
  PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  inlineCodeMarker?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  injectHTML?: Maybe<Scalars['Boolean']>;
  icons?: Maybe<SitePluginPluginOptionsIcons>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  inlineCodeMarker?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  injectHTML?: Maybe<BooleanQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  android?: Maybe<Scalars['Boolean']>;
  appleIcon?: Maybe<Scalars['Boolean']>;
  appleStartup?: Maybe<Scalars['Boolean']>;
  coast?: Maybe<Scalars['Boolean']>;
  favicons?: Maybe<Scalars['Boolean']>;
  firefox?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  yandex?: Maybe<Scalars['Boolean']>;
  windows?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  android?: Maybe<BooleanQueryOperatorInput>;
  appleIcon?: Maybe<BooleanQueryOperatorInput>;
  appleStartup?: Maybe<BooleanQueryOperatorInput>;
  coast?: Maybe<BooleanQueryOperatorInput>;
  favicons?: Maybe<BooleanQueryOperatorInput>;
  firefox?: Maybe<BooleanQueryOperatorInput>;
  twitter?: Maybe<BooleanQueryOperatorInput>;
  yandex?: Maybe<BooleanQueryOperatorInput>;
  windows?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  inlineCodeMarker?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  inlineCodeMarker?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type GatsbyContentfulFixedFragment = (
  { __typename?: 'ContentfulFixed' }
  & Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyContentfulFixed_TracedSvgFragment = (
  { __typename?: 'ContentfulFixed' }
  & Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyContentfulFixed_NoBase64Fragment = (
  { __typename?: 'ContentfulFixed' }
  & Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyContentfulFixed_WithWebpFragment = (
  { __typename?: 'ContentfulFixed' }
  & Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ContentfulFixed' }
  & Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyContentfulFluidFragment = (
  { __typename?: 'ContentfulFluid' }
  & Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyContentfulFluid_TracedSvgFragment = (
  { __typename?: 'ContentfulFluid' }
  & Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyContentfulFluid_NoBase64Fragment = (
  { __typename?: 'ContentfulFluid' }
  & Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyContentfulFluid_WithWebpFragment = (
  { __typename?: 'ContentfulFluid' }
  & Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ContentfulFluid' }
  & Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyContentfulResolutionsFragment = (
  { __typename?: 'ContentfulResolutions' }
  & Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyContentfulResolutions_TracedSvgFragment = (
  { __typename?: 'ContentfulResolutions' }
  & Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyContentfulResolutions_NoBase64Fragment = (
  { __typename?: 'ContentfulResolutions' }
  & Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyContentfulResolutions_WithWebpFragment = (
  { __typename?: 'ContentfulResolutions' }
  & Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ContentfulResolutions' }
  & Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyContentfulSizesFragment = (
  { __typename?: 'ContentfulSizes' }
  & Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyContentfulSizes_TracedSvgFragment = (
  { __typename?: 'ContentfulSizes' }
  & Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyContentfulSizes_NoBase64Fragment = (
  { __typename?: 'ContentfulSizes' }
  & Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyContentfulSizes_WithWebpFragment = (
  { __typename?: 'ContentfulSizes' }
  & Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ContentfulSizes' }
  & Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type AboutMeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutMeQueryQuery = (
  { __typename?: 'Query' }
  & { contentfulAbout?: Maybe<(
    { __typename?: 'ContentfulAbout' }
    & Pick<ContentfulAbout, 'name' | 'shortBio'>
    & { aboutMe?: Maybe<(
      { __typename?: 'contentfulAboutAboutMeTextNode' }
      & { childMarkdownRemark?: Maybe<(
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'html'>
      )> }
    )>, aboutPage?: Maybe<(
      { __typename?: 'contentfulAboutAboutPageTextNode' }
      & { childMarkdownRemark?: Maybe<(
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'html'>
      )> }
    )> }
  )> }
);

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields?: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'date' | 'title' | 'description'>
        )> }
      ) }
    )> }
  ) }
);

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = (
  { __typename?: 'Query' }
  & { allContentfulProject: (
    { __typename?: 'ContentfulProjectConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulProjectEdge' }
      & { node: (
        { __typename?: 'ContentfulProject' }
        & Pick<ContentfulProject, 'name' | 'projectUrl' | 'repositoryUrl' | 'type' | 'techStack' | 'description'>
        & { logo?: Maybe<(
          { __typename?: 'ContentfulAsset' }
          & { sizes?: Maybe<(
            { __typename?: 'ContentfulSizes' }
            & Pick<ContentfulSizes, 'src'>
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type SiteMetaDataQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetaDataQueryQuery = (
  { __typename?: 'Query' }
  & { contentfulSiteMetadata?: Maybe<(
    { __typename?: 'ContentfulSiteMetadata' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'contentfulSiteMetadataSiteMetadataJsonNode' }
      & Pick<ContentfulSiteMetadataSiteMetadataJsonNode, 'title' | 'pathPrefix' | 'siteTitle' | 'siteTitleAlt' | 'siteUrl' | 'siteLanguage' | 'siteDescription' | 'ogLanguage'>
      & { menuLinks?: Maybe<Array<Maybe<(
        { __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeMenuLinks' }
        & Pick<ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinks, 'link' | 'name'>
      )>>>, socialLinks?: Maybe<Array<Maybe<(
        { __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeSocialLinks' }
        & Pick<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks, 'icon' | 'link' | 'name'>
      )>>>, resumeLink?: Maybe<(
        { __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeResumeLink' }
        & Pick<ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink, 'link' | 'name'>
      )>, email?: Maybe<(
        { __typename?: 'contentfulSiteMetadataSiteMetadataJsonNodeEmail' }
        & Pick<ContentfulSiteMetadataSiteMetadataJsonNodeEmail, 'value'>
      )> }
    )> }
  )> }
);

export type BlogPostBySlugQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type BlogPostBySlugQuery = (
  { __typename?: 'Query' }
  & { markdownRemark?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'id' | 'excerpt' | 'html'>
    & { frontmatter?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'description'>
    )> }
  )> }
);
