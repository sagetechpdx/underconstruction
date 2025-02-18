import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Oregon" invert={invert}>
          Portland, OR
          <br />
          Hillsboro, OR
          <br />
          Beaverton, OR
          <br />
          Gresham, OR
          <br />
          Milwaukie, OR
          <br />
          Tigard, OR
          <br />
          Lake Oswego, OR
          <br />
        </Office>
      </li>
      <li>
        <Office name="Washington" invert={invert}>
          Vancouver, WA
          <br />
          Camas, WA
          <br />
          Hazel Dell, WA
        </Office>
      </li>
    </ul>
  )
}
