import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function Page() {
  const router = useRouter();

  const [dataDetail, setDatail] = useState();
  const { idDetail } = router.query;

  useEffect(() => {
    // call api detail
    // then save to state
    // if id 3 is Ariska
    setDatail('Ariska');
  }, [idDetail]);

  return <>detail for id {dataDetail}</>;
}
