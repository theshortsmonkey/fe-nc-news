export const LoadingDiv = ({children,isLoading,dataType}) => {
  let dataText = 'data'
  if (dataType) dataText=`${dataType} data`
  return (
    isLoading ? <p>Waiting for {dataText}...</p> : children
  )
}