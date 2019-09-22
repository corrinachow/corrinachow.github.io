export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type ContentfulAbout = Node & {
  __typename?: "ContentfulAbout";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  shortBio?: Maybe<Scalars["String"]>;
  techStack?: Maybe<Array<Maybe<Scalars["String"]>>>;
  profileImage?: Maybe<ContentfulAsset>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNode>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  node_locale?: Maybe<Scalars["String"]>;
  childContentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNode>;
};

export type ContentfulAboutCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulAboutUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulAboutAboutMeTextNode = Node & {
  __typename?: "contentfulAboutAboutMeTextNode";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  aboutMe?: Maybe<Scalars["String"]>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAboutAboutMeTextNodeConnection = {
  __typename?: "contentfulAboutAboutMeTextNodeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAboutAboutMeTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutMeTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulAboutAboutMeTextNodeGroupConnection>;
};

export type ContentfulAboutAboutMeTextNodeConnectionDistinctArgs = {
  field: ContentfulAboutAboutMeTextNodeFieldsEnum;
};

export type ContentfulAboutAboutMeTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulAboutAboutMeTextNodeFieldsEnum;
};

export type ContentfulAboutAboutMeTextNodeEdge = {
  __typename?: "contentfulAboutAboutMeTextNodeEdge";
  next?: Maybe<ContentfulAboutAboutMeTextNode>;
  node: ContentfulAboutAboutMeTextNode;
  previous?: Maybe<ContentfulAboutAboutMeTextNode>;
};

export enum ContentfulAboutAboutMeTextNodeFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  AboutMe = "aboutMe",
  ChildMarkdownRemarkId = "childMarkdownRemark___id",
  ChildMarkdownRemarkFrontmatterTitle = "childMarkdownRemark___frontmatter___title",
  ChildMarkdownRemarkExcerpt = "childMarkdownRemark___excerpt",
  ChildMarkdownRemarkRawMarkdownBody = "childMarkdownRemark___rawMarkdownBody",
  ChildMarkdownRemarkHtml = "childMarkdownRemark___html",
  ChildMarkdownRemarkHtmlAst = "childMarkdownRemark___htmlAst",
  ChildMarkdownRemarkExcerptAst = "childMarkdownRemark___excerptAst",
  ChildMarkdownRemarkHeadings = "childMarkdownRemark___headings",
  ChildMarkdownRemarkHeadingsValue = "childMarkdownRemark___headings___value",
  ChildMarkdownRemarkHeadingsDepth = "childMarkdownRemark___headings___depth",
  ChildMarkdownRemarkTimeToRead = "childMarkdownRemark___timeToRead",
  ChildMarkdownRemarkTableOfContents = "childMarkdownRemark___tableOfContents",
  ChildMarkdownRemarkWordCountParagraphs = "childMarkdownRemark___wordCount___paragraphs",
  ChildMarkdownRemarkWordCountSentences = "childMarkdownRemark___wordCount___sentences",
  ChildMarkdownRemarkWordCountWords = "childMarkdownRemark___wordCount___words",
  ChildMarkdownRemarkParentId = "childMarkdownRemark___parent___id",
  ChildMarkdownRemarkParentParentId = "childMarkdownRemark___parent___parent___id",
  ChildMarkdownRemarkParentParentChildren = "childMarkdownRemark___parent___parent___children",
  ChildMarkdownRemarkParentChildren = "childMarkdownRemark___parent___children",
  ChildMarkdownRemarkParentChildrenId = "childMarkdownRemark___parent___children___id",
  ChildMarkdownRemarkParentChildrenChildren = "childMarkdownRemark___parent___children___children",
  ChildMarkdownRemarkParentInternalContent = "childMarkdownRemark___parent___internal___content",
  ChildMarkdownRemarkParentInternalContentDigest = "childMarkdownRemark___parent___internal___contentDigest",
  ChildMarkdownRemarkParentInternalDescription = "childMarkdownRemark___parent___internal___description",
  ChildMarkdownRemarkParentInternalFieldOwners = "childMarkdownRemark___parent___internal___fieldOwners",
  ChildMarkdownRemarkParentInternalIgnoreType = "childMarkdownRemark___parent___internal___ignoreType",
  ChildMarkdownRemarkParentInternalMediaType = "childMarkdownRemark___parent___internal___mediaType",
  ChildMarkdownRemarkParentInternalOwner = "childMarkdownRemark___parent___internal___owner",
  ChildMarkdownRemarkParentInternalType = "childMarkdownRemark___parent___internal___type",
  ChildMarkdownRemarkChildren = "childMarkdownRemark___children",
  ChildMarkdownRemarkChildrenId = "childMarkdownRemark___children___id",
  ChildMarkdownRemarkChildrenParentId = "childMarkdownRemark___children___parent___id",
  ChildMarkdownRemarkChildrenParentChildren = "childMarkdownRemark___children___parent___children",
  ChildMarkdownRemarkChildrenChildren = "childMarkdownRemark___children___children",
  ChildMarkdownRemarkChildrenChildrenId = "childMarkdownRemark___children___children___id",
  ChildMarkdownRemarkChildrenChildrenChildren = "childMarkdownRemark___children___children___children",
  ChildMarkdownRemarkChildrenInternalContent = "childMarkdownRemark___children___internal___content",
  ChildMarkdownRemarkChildrenInternalContentDigest = "childMarkdownRemark___children___internal___contentDigest",
  ChildMarkdownRemarkChildrenInternalDescription = "childMarkdownRemark___children___internal___description",
  ChildMarkdownRemarkChildrenInternalFieldOwners = "childMarkdownRemark___children___internal___fieldOwners",
  ChildMarkdownRemarkChildrenInternalIgnoreType = "childMarkdownRemark___children___internal___ignoreType",
  ChildMarkdownRemarkChildrenInternalMediaType = "childMarkdownRemark___children___internal___mediaType",
  ChildMarkdownRemarkChildrenInternalOwner = "childMarkdownRemark___children___internal___owner",
  ChildMarkdownRemarkChildrenInternalType = "childMarkdownRemark___children___internal___type",
  ChildMarkdownRemarkInternalContent = "childMarkdownRemark___internal___content",
  ChildMarkdownRemarkInternalContentDigest = "childMarkdownRemark___internal___contentDigest",
  ChildMarkdownRemarkInternalDescription = "childMarkdownRemark___internal___description",
  ChildMarkdownRemarkInternalFieldOwners = "childMarkdownRemark___internal___fieldOwners",
  ChildMarkdownRemarkInternalIgnoreType = "childMarkdownRemark___internal___ignoreType",
  ChildMarkdownRemarkInternalMediaType = "childMarkdownRemark___internal___mediaType",
  ChildMarkdownRemarkInternalOwner = "childMarkdownRemark___internal___owner",
  ChildMarkdownRemarkInternalType = "childMarkdownRemark___internal___type",
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
  __typename?: "contentfulAboutAboutMeTextNodeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAboutAboutMeTextNodeEdge>;
  nodes: Array<ContentfulAboutAboutMeTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulAboutAboutMeTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutAboutMeTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAboutConnection = {
  __typename?: "ContentfulAboutConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAboutEdge>;
  nodes: Array<ContentfulAbout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulAboutGroupConnection>;
};

export type ContentfulAboutConnectionDistinctArgs = {
  field: ContentfulAboutFieldsEnum;
};

export type ContentfulAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulAboutFieldsEnum;
};

export type ContentfulAboutEdge = {
  __typename?: "ContentfulAboutEdge";
  next?: Maybe<ContentfulAbout>;
  node: ContentfulAbout;
  previous?: Maybe<ContentfulAbout>;
};

export enum ContentfulAboutFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  ShortBio = "shortBio",
  TechStack = "techStack",
  ProfileImageId = "profileImage___id",
  ProfileImageParentId = "profileImage___parent___id",
  ProfileImageParentParentId = "profileImage___parent___parent___id",
  ProfileImageParentParentChildren = "profileImage___parent___parent___children",
  ProfileImageParentChildren = "profileImage___parent___children",
  ProfileImageParentChildrenId = "profileImage___parent___children___id",
  ProfileImageParentChildrenChildren = "profileImage___parent___children___children",
  ProfileImageParentInternalContent = "profileImage___parent___internal___content",
  ProfileImageParentInternalContentDigest = "profileImage___parent___internal___contentDigest",
  ProfileImageParentInternalDescription = "profileImage___parent___internal___description",
  ProfileImageParentInternalFieldOwners = "profileImage___parent___internal___fieldOwners",
  ProfileImageParentInternalIgnoreType = "profileImage___parent___internal___ignoreType",
  ProfileImageParentInternalMediaType = "profileImage___parent___internal___mediaType",
  ProfileImageParentInternalOwner = "profileImage___parent___internal___owner",
  ProfileImageParentInternalType = "profileImage___parent___internal___type",
  ProfileImageChildren = "profileImage___children",
  ProfileImageChildrenId = "profileImage___children___id",
  ProfileImageChildrenParentId = "profileImage___children___parent___id",
  ProfileImageChildrenParentChildren = "profileImage___children___parent___children",
  ProfileImageChildrenChildren = "profileImage___children___children",
  ProfileImageChildrenChildrenId = "profileImage___children___children___id",
  ProfileImageChildrenChildrenChildren = "profileImage___children___children___children",
  ProfileImageChildrenInternalContent = "profileImage___children___internal___content",
  ProfileImageChildrenInternalContentDigest = "profileImage___children___internal___contentDigest",
  ProfileImageChildrenInternalDescription = "profileImage___children___internal___description",
  ProfileImageChildrenInternalFieldOwners = "profileImage___children___internal___fieldOwners",
  ProfileImageChildrenInternalIgnoreType = "profileImage___children___internal___ignoreType",
  ProfileImageChildrenInternalMediaType = "profileImage___children___internal___mediaType",
  ProfileImageChildrenInternalOwner = "profileImage___children___internal___owner",
  ProfileImageChildrenInternalType = "profileImage___children___internal___type",
  ProfileImageInternalContent = "profileImage___internal___content",
  ProfileImageInternalContentDigest = "profileImage___internal___contentDigest",
  ProfileImageInternalDescription = "profileImage___internal___description",
  ProfileImageInternalFieldOwners = "profileImage___internal___fieldOwners",
  ProfileImageInternalIgnoreType = "profileImage___internal___ignoreType",
  ProfileImageInternalMediaType = "profileImage___internal___mediaType",
  ProfileImageInternalOwner = "profileImage___internal___owner",
  ProfileImageInternalType = "profileImage___internal___type",
  ProfileImageContentfulId = "profileImage___contentful_id",
  ProfileImageFileUrl = "profileImage___file___url",
  ProfileImageFileDetailsSize = "profileImage___file___details___size",
  ProfileImageFileFileName = "profileImage___file___fileName",
  ProfileImageFileContentType = "profileImage___file___contentType",
  ProfileImageTitle = "profileImage___title",
  ProfileImageDescription = "profileImage___description",
  ProfileImageNodeLocale = "profileImage___node_locale",
  ProfileImageFixedBase64 = "profileImage___fixed___base64",
  ProfileImageFixedTracedSvg = "profileImage___fixed___tracedSVG",
  ProfileImageFixedAspectRatio = "profileImage___fixed___aspectRatio",
  ProfileImageFixedWidth = "profileImage___fixed___width",
  ProfileImageFixedHeight = "profileImage___fixed___height",
  ProfileImageFixedSrc = "profileImage___fixed___src",
  ProfileImageFixedSrcSet = "profileImage___fixed___srcSet",
  ProfileImageFixedSrcWebp = "profileImage___fixed___srcWebp",
  ProfileImageFixedSrcSetWebp = "profileImage___fixed___srcSetWebp",
  ProfileImageResolutionsBase64 = "profileImage___resolutions___base64",
  ProfileImageResolutionsTracedSvg = "profileImage___resolutions___tracedSVG",
  ProfileImageResolutionsAspectRatio = "profileImage___resolutions___aspectRatio",
  ProfileImageResolutionsWidth = "profileImage___resolutions___width",
  ProfileImageResolutionsHeight = "profileImage___resolutions___height",
  ProfileImageResolutionsSrc = "profileImage___resolutions___src",
  ProfileImageResolutionsSrcSet = "profileImage___resolutions___srcSet",
  ProfileImageResolutionsSrcWebp = "profileImage___resolutions___srcWebp",
  ProfileImageResolutionsSrcSetWebp = "profileImage___resolutions___srcSetWebp",
  ProfileImageFluidBase64 = "profileImage___fluid___base64",
  ProfileImageFluidTracedSvg = "profileImage___fluid___tracedSVG",
  ProfileImageFluidAspectRatio = "profileImage___fluid___aspectRatio",
  ProfileImageFluidSrc = "profileImage___fluid___src",
  ProfileImageFluidSrcSet = "profileImage___fluid___srcSet",
  ProfileImageFluidSrcWebp = "profileImage___fluid___srcWebp",
  ProfileImageFluidSrcSetWebp = "profileImage___fluid___srcSetWebp",
  ProfileImageFluidSizes = "profileImage___fluid___sizes",
  ProfileImageSizesBase64 = "profileImage___sizes___base64",
  ProfileImageSizesTracedSvg = "profileImage___sizes___tracedSVG",
  ProfileImageSizesAspectRatio = "profileImage___sizes___aspectRatio",
  ProfileImageSizesSrc = "profileImage___sizes___src",
  ProfileImageSizesSrcSet = "profileImage___sizes___srcSet",
  ProfileImageSizesSrcWebp = "profileImage___sizes___srcWebp",
  ProfileImageSizesSrcSetWebp = "profileImage___sizes___srcSetWebp",
  ProfileImageSizesSizes = "profileImage___sizes___sizes",
  ProfileImageResizeBase64 = "profileImage___resize___base64",
  ProfileImageResizeTracedSvg = "profileImage___resize___tracedSVG",
  ProfileImageResizeSrc = "profileImage___resize___src",
  ProfileImageResizeWidth = "profileImage___resize___width",
  ProfileImageResizeHeight = "profileImage___resize___height",
  ProfileImageResizeAspectRatio = "profileImage___resize___aspectRatio",
  AboutMeId = "aboutMe___id",
  AboutMeParentId = "aboutMe___parent___id",
  AboutMeParentParentId = "aboutMe___parent___parent___id",
  AboutMeParentParentChildren = "aboutMe___parent___parent___children",
  AboutMeParentChildren = "aboutMe___parent___children",
  AboutMeParentChildrenId = "aboutMe___parent___children___id",
  AboutMeParentChildrenChildren = "aboutMe___parent___children___children",
  AboutMeParentInternalContent = "aboutMe___parent___internal___content",
  AboutMeParentInternalContentDigest = "aboutMe___parent___internal___contentDigest",
  AboutMeParentInternalDescription = "aboutMe___parent___internal___description",
  AboutMeParentInternalFieldOwners = "aboutMe___parent___internal___fieldOwners",
  AboutMeParentInternalIgnoreType = "aboutMe___parent___internal___ignoreType",
  AboutMeParentInternalMediaType = "aboutMe___parent___internal___mediaType",
  AboutMeParentInternalOwner = "aboutMe___parent___internal___owner",
  AboutMeParentInternalType = "aboutMe___parent___internal___type",
  AboutMeChildren = "aboutMe___children",
  AboutMeChildrenId = "aboutMe___children___id",
  AboutMeChildrenParentId = "aboutMe___children___parent___id",
  AboutMeChildrenParentChildren = "aboutMe___children___parent___children",
  AboutMeChildrenChildren = "aboutMe___children___children",
  AboutMeChildrenChildrenId = "aboutMe___children___children___id",
  AboutMeChildrenChildrenChildren = "aboutMe___children___children___children",
  AboutMeChildrenInternalContent = "aboutMe___children___internal___content",
  AboutMeChildrenInternalContentDigest = "aboutMe___children___internal___contentDigest",
  AboutMeChildrenInternalDescription = "aboutMe___children___internal___description",
  AboutMeChildrenInternalFieldOwners = "aboutMe___children___internal___fieldOwners",
  AboutMeChildrenInternalIgnoreType = "aboutMe___children___internal___ignoreType",
  AboutMeChildrenInternalMediaType = "aboutMe___children___internal___mediaType",
  AboutMeChildrenInternalOwner = "aboutMe___children___internal___owner",
  AboutMeChildrenInternalType = "aboutMe___children___internal___type",
  AboutMeInternalContent = "aboutMe___internal___content",
  AboutMeInternalContentDigest = "aboutMe___internal___contentDigest",
  AboutMeInternalDescription = "aboutMe___internal___description",
  AboutMeInternalFieldOwners = "aboutMe___internal___fieldOwners",
  AboutMeInternalIgnoreType = "aboutMe___internal___ignoreType",
  AboutMeInternalMediaType = "aboutMe___internal___mediaType",
  AboutMeInternalOwner = "aboutMe___internal___owner",
  AboutMeInternalType = "aboutMe___internal___type",
  AboutMeAboutMe = "aboutMe___aboutMe",
  AboutMeChildMarkdownRemarkId = "aboutMe___childMarkdownRemark___id",
  AboutMeChildMarkdownRemarkFrontmatterTitle = "aboutMe___childMarkdownRemark___frontmatter___title",
  AboutMeChildMarkdownRemarkExcerpt = "aboutMe___childMarkdownRemark___excerpt",
  AboutMeChildMarkdownRemarkRawMarkdownBody = "aboutMe___childMarkdownRemark___rawMarkdownBody",
  AboutMeChildMarkdownRemarkHtml = "aboutMe___childMarkdownRemark___html",
  AboutMeChildMarkdownRemarkHtmlAst = "aboutMe___childMarkdownRemark___htmlAst",
  AboutMeChildMarkdownRemarkExcerptAst = "aboutMe___childMarkdownRemark___excerptAst",
  AboutMeChildMarkdownRemarkHeadings = "aboutMe___childMarkdownRemark___headings",
  AboutMeChildMarkdownRemarkHeadingsValue = "aboutMe___childMarkdownRemark___headings___value",
  AboutMeChildMarkdownRemarkHeadingsDepth = "aboutMe___childMarkdownRemark___headings___depth",
  AboutMeChildMarkdownRemarkTimeToRead = "aboutMe___childMarkdownRemark___timeToRead",
  AboutMeChildMarkdownRemarkTableOfContents = "aboutMe___childMarkdownRemark___tableOfContents",
  AboutMeChildMarkdownRemarkWordCountParagraphs = "aboutMe___childMarkdownRemark___wordCount___paragraphs",
  AboutMeChildMarkdownRemarkWordCountSentences = "aboutMe___childMarkdownRemark___wordCount___sentences",
  AboutMeChildMarkdownRemarkWordCountWords = "aboutMe___childMarkdownRemark___wordCount___words",
  AboutMeChildMarkdownRemarkParentId = "aboutMe___childMarkdownRemark___parent___id",
  AboutMeChildMarkdownRemarkParentChildren = "aboutMe___childMarkdownRemark___parent___children",
  AboutMeChildMarkdownRemarkChildren = "aboutMe___childMarkdownRemark___children",
  AboutMeChildMarkdownRemarkChildrenId = "aboutMe___childMarkdownRemark___children___id",
  AboutMeChildMarkdownRemarkChildrenChildren = "aboutMe___childMarkdownRemark___children___children",
  AboutMeChildMarkdownRemarkInternalContent = "aboutMe___childMarkdownRemark___internal___content",
  AboutMeChildMarkdownRemarkInternalContentDigest = "aboutMe___childMarkdownRemark___internal___contentDigest",
  AboutMeChildMarkdownRemarkInternalDescription = "aboutMe___childMarkdownRemark___internal___description",
  AboutMeChildMarkdownRemarkInternalFieldOwners = "aboutMe___childMarkdownRemark___internal___fieldOwners",
  AboutMeChildMarkdownRemarkInternalIgnoreType = "aboutMe___childMarkdownRemark___internal___ignoreType",
  AboutMeChildMarkdownRemarkInternalMediaType = "aboutMe___childMarkdownRemark___internal___mediaType",
  AboutMeChildMarkdownRemarkInternalOwner = "aboutMe___childMarkdownRemark___internal___owner",
  AboutMeChildMarkdownRemarkInternalType = "aboutMe___childMarkdownRemark___internal___type",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  NodeLocale = "node_locale",
  ChildContentfulAboutAboutMeTextNodeId = "childContentfulAboutAboutMeTextNode___id",
  ChildContentfulAboutAboutMeTextNodeParentId = "childContentfulAboutAboutMeTextNode___parent___id",
  ChildContentfulAboutAboutMeTextNodeParentParentId = "childContentfulAboutAboutMeTextNode___parent___parent___id",
  ChildContentfulAboutAboutMeTextNodeParentParentChildren = "childContentfulAboutAboutMeTextNode___parent___parent___children",
  ChildContentfulAboutAboutMeTextNodeParentChildren = "childContentfulAboutAboutMeTextNode___parent___children",
  ChildContentfulAboutAboutMeTextNodeParentChildrenId = "childContentfulAboutAboutMeTextNode___parent___children___id",
  ChildContentfulAboutAboutMeTextNodeParentChildrenChildren = "childContentfulAboutAboutMeTextNode___parent___children___children",
  ChildContentfulAboutAboutMeTextNodeParentInternalContent = "childContentfulAboutAboutMeTextNode___parent___internal___content",
  ChildContentfulAboutAboutMeTextNodeParentInternalContentDigest = "childContentfulAboutAboutMeTextNode___parent___internal___contentDigest",
  ChildContentfulAboutAboutMeTextNodeParentInternalDescription = "childContentfulAboutAboutMeTextNode___parent___internal___description",
  ChildContentfulAboutAboutMeTextNodeParentInternalFieldOwners = "childContentfulAboutAboutMeTextNode___parent___internal___fieldOwners",
  ChildContentfulAboutAboutMeTextNodeParentInternalIgnoreType = "childContentfulAboutAboutMeTextNode___parent___internal___ignoreType",
  ChildContentfulAboutAboutMeTextNodeParentInternalMediaType = "childContentfulAboutAboutMeTextNode___parent___internal___mediaType",
  ChildContentfulAboutAboutMeTextNodeParentInternalOwner = "childContentfulAboutAboutMeTextNode___parent___internal___owner",
  ChildContentfulAboutAboutMeTextNodeParentInternalType = "childContentfulAboutAboutMeTextNode___parent___internal___type",
  ChildContentfulAboutAboutMeTextNodeChildren = "childContentfulAboutAboutMeTextNode___children",
  ChildContentfulAboutAboutMeTextNodeChildrenId = "childContentfulAboutAboutMeTextNode___children___id",
  ChildContentfulAboutAboutMeTextNodeChildrenParentId = "childContentfulAboutAboutMeTextNode___children___parent___id",
  ChildContentfulAboutAboutMeTextNodeChildrenParentChildren = "childContentfulAboutAboutMeTextNode___children___parent___children",
  ChildContentfulAboutAboutMeTextNodeChildrenChildren = "childContentfulAboutAboutMeTextNode___children___children",
  ChildContentfulAboutAboutMeTextNodeChildrenChildrenId = "childContentfulAboutAboutMeTextNode___children___children___id",
  ChildContentfulAboutAboutMeTextNodeChildrenChildrenChildren = "childContentfulAboutAboutMeTextNode___children___children___children",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalContent = "childContentfulAboutAboutMeTextNode___children___internal___content",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalContentDigest = "childContentfulAboutAboutMeTextNode___children___internal___contentDigest",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalDescription = "childContentfulAboutAboutMeTextNode___children___internal___description",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalFieldOwners = "childContentfulAboutAboutMeTextNode___children___internal___fieldOwners",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalIgnoreType = "childContentfulAboutAboutMeTextNode___children___internal___ignoreType",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalMediaType = "childContentfulAboutAboutMeTextNode___children___internal___mediaType",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalOwner = "childContentfulAboutAboutMeTextNode___children___internal___owner",
  ChildContentfulAboutAboutMeTextNodeChildrenInternalType = "childContentfulAboutAboutMeTextNode___children___internal___type",
  ChildContentfulAboutAboutMeTextNodeInternalContent = "childContentfulAboutAboutMeTextNode___internal___content",
  ChildContentfulAboutAboutMeTextNodeInternalContentDigest = "childContentfulAboutAboutMeTextNode___internal___contentDigest",
  ChildContentfulAboutAboutMeTextNodeInternalDescription = "childContentfulAboutAboutMeTextNode___internal___description",
  ChildContentfulAboutAboutMeTextNodeInternalFieldOwners = "childContentfulAboutAboutMeTextNode___internal___fieldOwners",
  ChildContentfulAboutAboutMeTextNodeInternalIgnoreType = "childContentfulAboutAboutMeTextNode___internal___ignoreType",
  ChildContentfulAboutAboutMeTextNodeInternalMediaType = "childContentfulAboutAboutMeTextNode___internal___mediaType",
  ChildContentfulAboutAboutMeTextNodeInternalOwner = "childContentfulAboutAboutMeTextNode___internal___owner",
  ChildContentfulAboutAboutMeTextNodeInternalType = "childContentfulAboutAboutMeTextNode___internal___type",
  ChildContentfulAboutAboutMeTextNodeAboutMe = "childContentfulAboutAboutMeTextNode___aboutMe",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkId = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___id",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkFrontmatterTitle = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___frontmatter___title",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkExcerpt = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerpt",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkRawMarkdownBody = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___rawMarkdownBody",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHtml = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___html",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHtmlAst = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___htmlAst",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkExcerptAst = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___excerptAst",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadings = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadingsValue = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___value",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkHeadingsDepth = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___headings___depth",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkTimeToRead = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___timeToRead",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkTableOfContents = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___tableOfContents",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkWordCountParagraphs = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___paragraphs",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkWordCountSentences = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___sentences",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkWordCountWords = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___wordCount___words",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkParentId = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___parent___id",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkParentChildren = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___parent___children",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkChildren = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___children",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkChildrenId = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___children___id",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkChildrenChildren = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___children___children",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalContent = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___content",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalContentDigest = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___contentDigest",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalDescription = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___description",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalFieldOwners = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___fieldOwners",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalIgnoreType = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___ignoreType",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalMediaType = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___mediaType",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalOwner = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___owner",
  ChildContentfulAboutAboutMeTextNodeChildMarkdownRemarkInternalType = "childContentfulAboutAboutMeTextNode___childMarkdownRemark___internal___type",
}

export type ContentfulAboutFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  techStack?: Maybe<StringQueryOperatorInput>;
  profileImage?: Maybe<ContentfulAssetFilterInput>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAboutAboutMeTextNode?: Maybe<
    ContentfulAboutAboutMeTextNodeFilterInput
  >;
};

export type ContentfulAboutGroupConnection = {
  __typename?: "ContentfulAboutGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAboutEdge>;
  nodes: Array<ContentfulAbout>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulAboutSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAsset = Node & {
  __typename?: "ContentfulAsset";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars["String"]>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  node_locale?: Maybe<Scalars["String"]>;
  fixed?: Maybe<ContentfulFixed>;
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetConnection = {
  __typename?: "ContentfulAssetConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulAssetGroupConnection>;
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: "ContentfulAssetEdge";
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ContentfulId = "contentful_id",
  FileUrl = "file___url",
  FileDetailsSize = "file___details___size",
  FileDetailsImageWidth = "file___details___image___width",
  FileDetailsImageHeight = "file___details___image___height",
  FileFileName = "file___fileName",
  FileContentType = "file___contentType",
  Title = "title",
  Description = "description",
  NodeLocale = "node_locale",
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  ResizeBase64 = "resize___base64",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeSrc = "resize___src",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
}

export type ContentfulAssetFile = {
  __typename?: "ContentfulAssetFile";
  url?: Maybe<Scalars["String"]>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars["String"]>;
  contentType?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
  __typename?: "ContentfulAssetFileDetails";
  size?: Maybe<Scalars["Int"]>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: "ContentfulAssetFileDetailsImage";
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
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
  __typename?: "ContentfulAssetGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentType = Node & {
  __typename?: "ContentfulContentType";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  displayField?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeConnection = {
  __typename?: "ContentfulContentTypeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulContentTypeGroupConnection>;
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: "ContentfulContentTypeEdge";
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  DisplayField = "displayField",
  Description = "description",
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
  __typename?: "ContentfulContentTypeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: "ContentfulFixed";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
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
  __typename?: "ContentfulFluid";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
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
  __typename?: "ContentfulImage";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars["String"]>;
  image?: Maybe<ContentfulAsset>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  node_locale?: Maybe<Scalars["String"]>;
};

export type ContentfulImageCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulImageConnection = {
  __typename?: "ContentfulImageConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulImageGroupConnection>;
};

export type ContentfulImageConnectionDistinctArgs = {
  field: ContentfulImageFieldsEnum;
};

export type ContentfulImageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulImageFieldsEnum;
};

export enum ContentfulImageCropFocus {
  Top = "TOP",
  TopLeft = "TOP_LEFT",
  TopRight = "TOP_RIGHT",
  Bottom = "BOTTOM",
  BottomRight = "BOTTOM_RIGHT",
  BottomLeft = "BOTTOM_LEFT",
  Right = "RIGHT",
  Left = "LEFT",
  Face = "FACE",
  Faces = "FACES",
  Center = "CENTER",
}

export type ContentfulImageEdge = {
  __typename?: "ContentfulImageEdge";
  next?: Maybe<ContentfulImage>;
  node: ContentfulImage;
  previous?: Maybe<ContentfulImage>;
};

export enum ContentfulImageFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Title = "title",
  ImageId = "image___id",
  ImageParentId = "image___parent___id",
  ImageParentParentId = "image___parent___parent___id",
  ImageParentParentChildren = "image___parent___parent___children",
  ImageParentChildren = "image___parent___children",
  ImageParentChildrenId = "image___parent___children___id",
  ImageParentChildrenChildren = "image___parent___children___children",
  ImageParentInternalContent = "image___parent___internal___content",
  ImageParentInternalContentDigest = "image___parent___internal___contentDigest",
  ImageParentInternalDescription = "image___parent___internal___description",
  ImageParentInternalFieldOwners = "image___parent___internal___fieldOwners",
  ImageParentInternalIgnoreType = "image___parent___internal___ignoreType",
  ImageParentInternalMediaType = "image___parent___internal___mediaType",
  ImageParentInternalOwner = "image___parent___internal___owner",
  ImageParentInternalType = "image___parent___internal___type",
  ImageChildren = "image___children",
  ImageChildrenId = "image___children___id",
  ImageChildrenParentId = "image___children___parent___id",
  ImageChildrenParentChildren = "image___children___parent___children",
  ImageChildrenChildren = "image___children___children",
  ImageChildrenChildrenId = "image___children___children___id",
  ImageChildrenChildrenChildren = "image___children___children___children",
  ImageChildrenInternalContent = "image___children___internal___content",
  ImageChildrenInternalContentDigest = "image___children___internal___contentDigest",
  ImageChildrenInternalDescription = "image___children___internal___description",
  ImageChildrenInternalFieldOwners = "image___children___internal___fieldOwners",
  ImageChildrenInternalIgnoreType = "image___children___internal___ignoreType",
  ImageChildrenInternalMediaType = "image___children___internal___mediaType",
  ImageChildrenInternalOwner = "image___children___internal___owner",
  ImageChildrenInternalType = "image___children___internal___type",
  ImageInternalContent = "image___internal___content",
  ImageInternalContentDigest = "image___internal___contentDigest",
  ImageInternalDescription = "image___internal___description",
  ImageInternalFieldOwners = "image___internal___fieldOwners",
  ImageInternalIgnoreType = "image___internal___ignoreType",
  ImageInternalMediaType = "image___internal___mediaType",
  ImageInternalOwner = "image___internal___owner",
  ImageInternalType = "image___internal___type",
  ImageContentfulId = "image___contentful_id",
  ImageFileUrl = "image___file___url",
  ImageFileDetailsSize = "image___file___details___size",
  ImageFileFileName = "image___file___fileName",
  ImageFileContentType = "image___file___contentType",
  ImageTitle = "image___title",
  ImageDescription = "image___description",
  ImageNodeLocale = "image___node_locale",
  ImageFixedBase64 = "image___fixed___base64",
  ImageFixedTracedSvg = "image___fixed___tracedSVG",
  ImageFixedAspectRatio = "image___fixed___aspectRatio",
  ImageFixedWidth = "image___fixed___width",
  ImageFixedHeight = "image___fixed___height",
  ImageFixedSrc = "image___fixed___src",
  ImageFixedSrcSet = "image___fixed___srcSet",
  ImageFixedSrcWebp = "image___fixed___srcWebp",
  ImageFixedSrcSetWebp = "image___fixed___srcSetWebp",
  ImageResolutionsBase64 = "image___resolutions___base64",
  ImageResolutionsTracedSvg = "image___resolutions___tracedSVG",
  ImageResolutionsAspectRatio = "image___resolutions___aspectRatio",
  ImageResolutionsWidth = "image___resolutions___width",
  ImageResolutionsHeight = "image___resolutions___height",
  ImageResolutionsSrc = "image___resolutions___src",
  ImageResolutionsSrcSet = "image___resolutions___srcSet",
  ImageResolutionsSrcWebp = "image___resolutions___srcWebp",
  ImageResolutionsSrcSetWebp = "image___resolutions___srcSetWebp",
  ImageFluidBase64 = "image___fluid___base64",
  ImageFluidTracedSvg = "image___fluid___tracedSVG",
  ImageFluidAspectRatio = "image___fluid___aspectRatio",
  ImageFluidSrc = "image___fluid___src",
  ImageFluidSrcSet = "image___fluid___srcSet",
  ImageFluidSrcWebp = "image___fluid___srcWebp",
  ImageFluidSrcSetWebp = "image___fluid___srcSetWebp",
  ImageFluidSizes = "image___fluid___sizes",
  ImageSizesBase64 = "image___sizes___base64",
  ImageSizesTracedSvg = "image___sizes___tracedSVG",
  ImageSizesAspectRatio = "image___sizes___aspectRatio",
  ImageSizesSrc = "image___sizes___src",
  ImageSizesSrcSet = "image___sizes___srcSet",
  ImageSizesSrcWebp = "image___sizes___srcWebp",
  ImageSizesSrcSetWebp = "image___sizes___srcSetWebp",
  ImageSizesSizes = "image___sizes___sizes",
  ImageResizeBase64 = "image___resize___base64",
  ImageResizeTracedSvg = "image___resize___tracedSVG",
  ImageResizeSrc = "image___resize___src",
  ImageResizeWidth = "image___resize___width",
  ImageResizeHeight = "image___resize___height",
  ImageResizeAspectRatio = "image___resize___aspectRatio",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  NodeLocale = "node_locale",
}

export type ContentfulImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export enum ContentfulImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP",
}

export type ContentfulImageGroupConnection = {
  __typename?: "ContentfulImageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProject = Node & {
  __typename?: "ContentfulProject";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  publishedDate?: Maybe<Scalars["Date"]>;
  repositoryUrl?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  logo?: Maybe<ContentfulAsset>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  node_locale?: Maybe<Scalars["String"]>;
  projectUrl?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectPublishedDateArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectConnection = {
  __typename?: "ContentfulProjectConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulProjectGroupConnection>;
};

export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  __typename?: "ContentfulProjectEdge";
  next?: Maybe<ContentfulProject>;
  node: ContentfulProject;
  previous?: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  PublishedDate = "publishedDate",
  RepositoryUrl = "repositoryUrl",
  Description = "description",
  Type = "type",
  LogoId = "logo___id",
  LogoParentId = "logo___parent___id",
  LogoParentParentId = "logo___parent___parent___id",
  LogoParentParentChildren = "logo___parent___parent___children",
  LogoParentChildren = "logo___parent___children",
  LogoParentChildrenId = "logo___parent___children___id",
  LogoParentChildrenChildren = "logo___parent___children___children",
  LogoParentInternalContent = "logo___parent___internal___content",
  LogoParentInternalContentDigest = "logo___parent___internal___contentDigest",
  LogoParentInternalDescription = "logo___parent___internal___description",
  LogoParentInternalFieldOwners = "logo___parent___internal___fieldOwners",
  LogoParentInternalIgnoreType = "logo___parent___internal___ignoreType",
  LogoParentInternalMediaType = "logo___parent___internal___mediaType",
  LogoParentInternalOwner = "logo___parent___internal___owner",
  LogoParentInternalType = "logo___parent___internal___type",
  LogoChildren = "logo___children",
  LogoChildrenId = "logo___children___id",
  LogoChildrenParentId = "logo___children___parent___id",
  LogoChildrenParentChildren = "logo___children___parent___children",
  LogoChildrenChildren = "logo___children___children",
  LogoChildrenChildrenId = "logo___children___children___id",
  LogoChildrenChildrenChildren = "logo___children___children___children",
  LogoChildrenInternalContent = "logo___children___internal___content",
  LogoChildrenInternalContentDigest = "logo___children___internal___contentDigest",
  LogoChildrenInternalDescription = "logo___children___internal___description",
  LogoChildrenInternalFieldOwners = "logo___children___internal___fieldOwners",
  LogoChildrenInternalIgnoreType = "logo___children___internal___ignoreType",
  LogoChildrenInternalMediaType = "logo___children___internal___mediaType",
  LogoChildrenInternalOwner = "logo___children___internal___owner",
  LogoChildrenInternalType = "logo___children___internal___type",
  LogoInternalContent = "logo___internal___content",
  LogoInternalContentDigest = "logo___internal___contentDigest",
  LogoInternalDescription = "logo___internal___description",
  LogoInternalFieldOwners = "logo___internal___fieldOwners",
  LogoInternalIgnoreType = "logo___internal___ignoreType",
  LogoInternalMediaType = "logo___internal___mediaType",
  LogoInternalOwner = "logo___internal___owner",
  LogoInternalType = "logo___internal___type",
  LogoContentfulId = "logo___contentful_id",
  LogoFileUrl = "logo___file___url",
  LogoFileDetailsSize = "logo___file___details___size",
  LogoFileFileName = "logo___file___fileName",
  LogoFileContentType = "logo___file___contentType",
  LogoTitle = "logo___title",
  LogoDescription = "logo___description",
  LogoNodeLocale = "logo___node_locale",
  LogoFixedBase64 = "logo___fixed___base64",
  LogoFixedTracedSvg = "logo___fixed___tracedSVG",
  LogoFixedAspectRatio = "logo___fixed___aspectRatio",
  LogoFixedWidth = "logo___fixed___width",
  LogoFixedHeight = "logo___fixed___height",
  LogoFixedSrc = "logo___fixed___src",
  LogoFixedSrcSet = "logo___fixed___srcSet",
  LogoFixedSrcWebp = "logo___fixed___srcWebp",
  LogoFixedSrcSetWebp = "logo___fixed___srcSetWebp",
  LogoResolutionsBase64 = "logo___resolutions___base64",
  LogoResolutionsTracedSvg = "logo___resolutions___tracedSVG",
  LogoResolutionsAspectRatio = "logo___resolutions___aspectRatio",
  LogoResolutionsWidth = "logo___resolutions___width",
  LogoResolutionsHeight = "logo___resolutions___height",
  LogoResolutionsSrc = "logo___resolutions___src",
  LogoResolutionsSrcSet = "logo___resolutions___srcSet",
  LogoResolutionsSrcWebp = "logo___resolutions___srcWebp",
  LogoResolutionsSrcSetWebp = "logo___resolutions___srcSetWebp",
  LogoFluidBase64 = "logo___fluid___base64",
  LogoFluidTracedSvg = "logo___fluid___tracedSVG",
  LogoFluidAspectRatio = "logo___fluid___aspectRatio",
  LogoFluidSrc = "logo___fluid___src",
  LogoFluidSrcSet = "logo___fluid___srcSet",
  LogoFluidSrcWebp = "logo___fluid___srcWebp",
  LogoFluidSrcSetWebp = "logo___fluid___srcSetWebp",
  LogoFluidSizes = "logo___fluid___sizes",
  LogoSizesBase64 = "logo___sizes___base64",
  LogoSizesTracedSvg = "logo___sizes___tracedSVG",
  LogoSizesAspectRatio = "logo___sizes___aspectRatio",
  LogoSizesSrc = "logo___sizes___src",
  LogoSizesSrcSet = "logo___sizes___srcSet",
  LogoSizesSrcWebp = "logo___sizes___srcWebp",
  LogoSizesSrcSetWebp = "logo___sizes___srcSetWebp",
  LogoSizesSizes = "logo___sizes___sizes",
  LogoResizeBase64 = "logo___resize___base64",
  LogoResizeTracedSvg = "logo___resize___tracedSVG",
  LogoResizeSrc = "logo___resize___src",
  LogoResizeWidth = "logo___resize___width",
  LogoResizeHeight = "logo___resize___height",
  LogoResizeAspectRatio = "logo___resize___aspectRatio",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  NodeLocale = "node_locale",
  ProjectUrl = "projectUrl",
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
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  projectUrl?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProjectGroupConnection = {
  __typename?: "ContentfulProjectGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulProjectEdge>;
  nodes: Array<ContentfulProject>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulProjectSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResize = {
  __typename?: "ContentfulResize";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
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
  __typename?: "ContentfulResolutions";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
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

export type ContentfulSizes = {
  __typename?: "ContentfulSizes";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
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

export type ContentfulSocialLink = Node & {
  __typename?: "ContentfulSocialLink";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  fontAwesomeIcon?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  node_locale?: Maybe<Scalars["String"]>;
};

export type ContentfulSocialLinkCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulSocialLinkUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulSocialLinkConnection = {
  __typename?: "ContentfulSocialLinkConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulSocialLinkEdge>;
  nodes: Array<ContentfulSocialLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulSocialLinkGroupConnection>;
};

export type ContentfulSocialLinkConnectionDistinctArgs = {
  field: ContentfulSocialLinkFieldsEnum;
};

export type ContentfulSocialLinkConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulSocialLinkFieldsEnum;
};

export type ContentfulSocialLinkEdge = {
  __typename?: "ContentfulSocialLinkEdge";
  next?: Maybe<ContentfulSocialLink>;
  node: ContentfulSocialLink;
  previous?: Maybe<ContentfulSocialLink>;
};

export enum ContentfulSocialLinkFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  Url = "url",
  FontAwesomeIcon = "fontAwesomeIcon",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  NodeLocale = "node_locale",
}

export type ContentfulSocialLinkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fontAwesomeIcon?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSocialLinkGroupConnection = {
  __typename?: "ContentfulSocialLinkGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulSocialLinkEdge>;
  nodes: Array<ContentfulSocialLink>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulSocialLinkSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSocialLinkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum ImageResizingBehavior {
  NoChange = "NO_CHANGE",
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = "PAD",
  /** Crop a part of the original image to match the specified size. */
  Crop = "CROP",
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   **/
  Fill = "FILL",
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = "THUMB",
  /** Scale the image regardless of the original aspect ratio. */
  Scale = "SCALE",
}

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
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
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex?: Maybe<Scalars["JSON"]>;
  glob?: Maybe<Scalars["JSON"]>;
};

export enum MarkdownExcerptFormats {
  Plain = "PLAIN",
  Html = "HTML",
  Markdown = "MARKDOWN",
}

export type MarkdownHeading = {
  __typename?: "MarkdownHeading";
  value?: Maybe<Scalars["String"]>;
  depth?: Maybe<Scalars["Int"]>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export type MarkdownRemark = Node & {
  __typename?: "MarkdownRemark";
  id: Scalars["ID"];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars["String"]>;
  rawMarkdownBody?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  htmlAst?: Maybe<Scalars["JSON"]>;
  excerptAst?: Maybe<Scalars["JSON"]>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars["Int"]>;
  tableOfContents?: Maybe<Scalars["String"]>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars["String"]>;
  maxDepth?: Maybe<Scalars["Int"]>;
  heading?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkConnection = {
  __typename?: "MarkdownRemarkConnection";
  totalCount: Scalars["Int"];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: "MarkdownRemarkEdge";
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = "id",
  FrontmatterTitle = "frontmatter___title",
  Excerpt = "excerpt",
  RawMarkdownBody = "rawMarkdownBody",
  Html = "html",
  HtmlAst = "htmlAst",
  ExcerptAst = "excerptAst",
  Headings = "headings",
  HeadingsValue = "headings___value",
  HeadingsDepth = "headings___depth",
  TimeToRead = "timeToRead",
  TableOfContents = "tableOfContents",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
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
  __typename?: "MarkdownRemarkFrontmatter";
  title?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: "MarkdownRemarkGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: "MarkdownWordCount";
  paragraphs?: Maybe<Scalars["Int"]>;
  sentences?: Maybe<Scalars["Int"]>;
  words?: Maybe<Scalars["Int"]>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
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
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  contentfulImage?: Maybe<ContentfulImage>;
  allContentfulImage: ContentfulImageConnection;
  contentfulProject?: Maybe<ContentfulProject>;
  allContentfulProject: ContentfulProjectConnection;
  contentfulSocialLink?: Maybe<ContentfulSocialLink>;
  allContentfulSocialLink: ContentfulSocialLinkConnection;
  contentfulAbout?: Maybe<ContentfulAbout>;
  allContentfulAbout: ContentfulAboutConnection;
  contentfulAboutAboutMeTextNode?: Maybe<ContentfulAboutAboutMeTextNode>;
  allContentfulAboutAboutMeTextNode: ContentfulAboutAboutMeTextNodeConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
};

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulImageArgs = {
  filter?: Maybe<ContentfulImageFilterInput>;
  sort?: Maybe<ContentfulImageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  projectUrl?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulProjectArgs = {
  filter?: Maybe<ContentfulProjectFilterInput>;
  sort?: Maybe<ContentfulProjectSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulSocialLinkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fontAwesomeIcon?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulSocialLinkArgs = {
  filter?: Maybe<ContentfulSocialLinkFilterInput>;
  sort?: Maybe<ContentfulSocialLinkSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulAboutArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
  techStack?: Maybe<StringQueryOperatorInput>;
  profileImage?: Maybe<ContentfulAssetFilterInput>;
  aboutMe?: Maybe<ContentfulAboutAboutMeTextNodeFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAboutAboutMeTextNode?: Maybe<
    ContentfulAboutAboutMeTextNodeFilterInput
  >;
};

export type QueryAllContentfulAboutArgs = {
  filter?: Maybe<ContentfulAboutFilterInput>;
  sort?: Maybe<ContentfulAboutSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SiteMetadataTitle = "siteMetadata___title",
  Port = "port",
  Host = "host",
  Polyfill = "polyfill",
  PathPrefix = "pathPrefix",
  BuildTime = "buildTime",
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars["String"]>;
  internalComponentName?: Maybe<Scalars["String"]>;
  component?: Maybe<Scalars["String"]>;
  componentChunkName?: Maybe<Scalars["String"]>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Path = "path",
  InternalComponentName = "internalComponentName",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorVersion = "pluginCreator___version",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsSpaceId = "pluginCreator___pluginOptions___spaceId",
  PluginCreatorPluginOptionsAccessToken = "pluginCreator___pluginOptions___accessToken",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonAuthor = "pluginCreator___packageJson___author",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Resolve = "resolve",
  Name = "name",
  Version = "version",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsSpaceId = "pluginOptions___spaceId",
  PluginOptionsAccessToken = "pluginOptions___accessToken",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonKeywords = "packageJson___keywords",
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
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
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
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  name?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  spaceId?: Maybe<Scalars["String"]>;
  accessToken?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};
export type GatsbyContentfulFixedFragment = {
  __typename?: "ContentfulFixed";
} & Pick<ContentfulFixed, "base64" | "width" | "height" | "src" | "srcSet">;

export type GatsbyContentfulFixed_TracedSvgFragment = {
  __typename?: "ContentfulFixed";
} & Pick<ContentfulFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet">;

export type GatsbyContentfulFixed_NoBase64Fragment = {
  __typename?: "ContentfulFixed";
} & Pick<ContentfulFixed, "width" | "height" | "src" | "srcSet">;

export type GatsbyContentfulFixed_WithWebpFragment = {
  __typename?: "ContentfulFixed";
} & Pick<
  ContentfulFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ContentfulFixed";
} & Pick<
  ContentfulFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulFluidFragment = {
  __typename?: "ContentfulFluid";
} & Pick<
  ContentfulFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_TracedSvgFragment = {
  __typename?: "ContentfulFluid";
} & Pick<
  ContentfulFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_NoBase64Fragment = {
  __typename?: "ContentfulFluid";
} & Pick<ContentfulFluid, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyContentfulFluid_WithWebpFragment = {
  __typename?: "ContentfulFluid";
} & Pick<
  ContentfulFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ContentfulFluid";
} & Pick<
  ContentfulFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyContentfulResolutionsFragment = {
  __typename?: "ContentfulResolutions";
} & Pick<
  ContentfulResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_TracedSvgFragment = {
  __typename?: "ContentfulResolutions";
} & Pick<
  ContentfulResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_NoBase64Fragment = {
  __typename?: "ContentfulResolutions";
} & Pick<ContentfulResolutions, "width" | "height" | "src" | "srcSet">;

export type GatsbyContentfulResolutions_WithWebpFragment = {
  __typename?: "ContentfulResolutions";
} & Pick<
  ContentfulResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = {
  __typename?: "ContentfulResolutions";
} & Pick<
  ContentfulResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulSizesFragment = {
  __typename?: "ContentfulSizes";
} & Pick<
  ContentfulSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_TracedSvgFragment = {
  __typename?: "ContentfulSizes";
} & Pick<
  ContentfulSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_NoBase64Fragment = {
  __typename?: "ContentfulSizes";
} & Pick<ContentfulSizes, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyContentfulSizes_WithWebpFragment = {
  __typename?: "ContentfulSizes";
} & Pick<
  ContentfulSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = {
  __typename?: "ContentfulSizes";
} & Pick<
  ContentfulSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type AboutMeQueryQueryVariables = {};

export type AboutMeQueryQuery = { __typename?: "Query" } & {
  contentfulAbout: Maybe<
    { __typename?: "ContentfulAbout" } & Pick<
      ContentfulAbout,
      "name" | "techStack" | "shortBio"
    > & {
        aboutMe: Maybe<
          { __typename?: "contentfulAboutAboutMeTextNode" } & {
            childMarkdownRemark: Maybe<
              { __typename?: "MarkdownRemark" } & Pick<MarkdownRemark, "html">
            >;
          }
        >;
      }
  >;
};

export type SiteTitleQueryQueryVariables = {};

export type SiteTitleQueryQuery = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">
      >;
    }
  >;
};

export type GetProjectsQueryVariables = {};

export type GetProjectsQuery = { __typename?: "Query" } & {
  allContentfulProject: { __typename?: "ContentfulProjectConnection" } & {
    edges: Array<
      { __typename?: "ContentfulProjectEdge" } & {
        node: { __typename?: "ContentfulProject" } & Pick<
          ContentfulProject,
          "name" | "projectUrl" | "repositoryUrl" | "type" | "description"
        > & {
            logo: Maybe<
              { __typename?: "ContentfulAsset" } & {
                sizes: Maybe<
                  { __typename?: "ContentfulSizes" } & Pick<
                    ContentfulSizes,
                    "src"
                  >
                >;
              }
            >;
          };
      }
    >;
  };
};
