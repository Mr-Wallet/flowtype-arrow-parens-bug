// @flow
import fp from 'lodash/fp';

type O = {|
  m<A>(func: (A) => A): (A) => A;
|};

const o: O = {
  m: (func) => func
};

function gen<T>(a: T) {}

const arrowGeneric = () => o.m<T>((x) => x);

const selectPassthrough = (OptionComponent: React.ComponentType<any>) => {
  const SelectPassthrough = (props: { data?: any }) => {
    const data: Object = props.data ? props.data : {};

    return (
      <SelectOptionComponent {...props}>
        <OptionComponent {...data} />
      </SelectOptionComponent>
    );
  };

  return SelectPassthrough;
}

const makeSelectPassthrough = <T>(aThing: T) => o.m<string>(selectPassthrough);

export const getActiveJiraIssueTrackerType: InputSelector<State, any, ?JiraIssueTrackerType>
  = Object.keys(
    (x) => x.j,
    (activeIssueTrackerType) =>
      activeIssueTrackerType === 'c'
      || activeIssueTrackerType === 'c'
        ? ((activeIssueTrackerType: any): JiraIssueTrackerType)
        : null
  );

const _jiraSwitchResultFunc = <Result, Fallback>(
  activeType: ?JiraIssueTrackerType,
  maybeOverrideType: ?JiraIssueTrackerType,
  cloudState: Result,
  serverState: Result,
  fallback: Fallback
): Result | Fallback => {
  switch (maybeOverrideType || activeType) {
    case 'jiraCloud': {
      return cloudState;
    }

    case 'jiraSever': {
      return serverState;
    }

    default: {
      return fallback;
    }
  }
};

const FUZZY_MATCH_PRE_DELIMITER = '';
const FUZZY_MATCH_POST_DELIMITER = '';
const filterList = () => {};

const issueTrackerTypes = {};

export const filterListByKey = <T>(query: string, list: T[], key: string[]) => {
  const config: FuzzyOpts<T> = {
    extract: (el: T): string => fp.getOr('', key, (el: any)),
    pre: FUZZY_MATCH_PRE_DELIMITER,
    post: FUZZY_MATCH_POST_DELIMITER
  };
  return filterList(query, list, config);
};

const gitlabSwitchResultFunc = <Result, Fallback>(
  activeType: ?GitLabIssueTrackerType,
  maybeOverrideType: ?GitLabIssueTrackerType,
  cloudState: Result,
  serverState: Result,
  fallback: Fallback
): Result | Fallback => {
  switch (maybeOverrideType || activeType) {
    case issueTrackerTypes.GITLAB: {
      return cloudState;
    }

    case issueTrackerTypes.GITLAB_SELF_HOSTED: {
      return serverState;
    }

    default: {
      return fallback;
    }
  }
};
