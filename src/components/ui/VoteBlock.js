import { VOTE } from "../../constants/vote";

const VOTE_STATE = {
  SELECTED: 1, // Current block has this vote
  DIMMED: 2, // This vote has already been selected for a dish
  UNSELECTED: 3, // This vote is still up for grabs. It hasn't been assigned to a dish yet.
};

const defaultBlockState = {
  [VOTE.GOLD]: VOTE_STATE.UNSELECTED,
  [VOTE.SILVER]: VOTE_STATE.UNSELECTED,
  [VOTE.BRONZE]: VOTE_STATE.UNSELECTED,
};

const isSelected = (state) => {
  return state === VOTE_STATE.SELECTED;
};

const isDimmed = (state) => {
  return state === VOTE_STATE.DIMMED;
};

function VoteOption({ type, children, state, onClick }) {
  return (
    <span
      className={`py-2 rounded border text-2xl no-s 
      ${isSelected(state) ? "bg-green-500" : ""}
      ${isDimmed(state) ? "bg-yellow-100" : ""}
      `}
      onClick={onClick.bind(this, type)}
    >
      {children}
    </span>
  );
}

function VoteBlock({ state, onClickHandler }) {
  const blockState = { ...defaultBlockState, ...state };
  return (
    <div className="grid grid-cols-3 gap-2 select-none">
      <VoteOption
        type={VOTE.GOLD}
        state={blockState[VOTE.GOLD]}
        onClick={onClickHandler}
      >
        🥇
      </VoteOption>
      <VoteOption
        type={VOTE.SILVER}
        state={blockState[VOTE.SILVER]}
        onClick={onClickHandler}
      >
        🥈
      </VoteOption>
      <VoteOption
        type={VOTE.BRONZE}
        state={blockState[VOTE.BRONZE]}
        onClick={onClickHandler}
      >
        🥉
      </VoteOption>
    </div>
  );
}

export default VoteBlock;

export { VOTE_STATE };
