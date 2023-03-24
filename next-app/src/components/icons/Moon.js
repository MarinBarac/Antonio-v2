const Moon = ({ color }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.3442C20.6866 16.9382 19.2286 17.2688 17.6935 17.2688C11.9153 17.2688 7.23116 12.5847 7.23116 6.80654C7.23116 5.27135 7.5618 3.8134 8.15577 2.5C4.52576 4.14163 2 7.7947 2 12.0377C2 17.8159 6.68414 22.5 12.4623 22.5C16.7053 22.5 20.3584 19.9742 22 16.3442Z"
        stroke={`${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Moon;
