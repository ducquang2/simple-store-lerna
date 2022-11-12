import React from 'react'
import { useGetProfileQuery, useGetUserHistoryQuery } from '../generated'

export { History }

type HistoryProps = {}

function History({}: HistoryProps) {
  const { data: userData } = useGetProfileQuery()
  const { data, loading, error } = useGetUserHistoryQuery({
    variables: {
      userId: userData?.GetProfile?.id as string,
    },
  })

  return (
    <div>
      <h3>History</h3>
      <div>
        {(data?.GetUserHistory || []).map((cart) => (
          <div key={cart?.date}>
            <p>{cart?.date}</p>
            <div>
              {(cart?.cartitems || []).map((item) => (
                <div key={item?.itemID}>
                  <p>{item?.itemID}</p>
                  <p>{item?.itemCount}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
