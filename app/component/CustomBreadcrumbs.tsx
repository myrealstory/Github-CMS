import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { StyleSkeleton } from '@/CMS_Skeleton_Style_V1';
import { LanguageList, margin } from '../globalStyle';
import { T } from '@/lib/FunctionLibrary';

export default function CustomBreadcrumbs({
  backToLink,
  mainLink,
  currentPage,
  backto,
  main,
}: {
  backToLink?: string;
  mainLink?: string;
  currentPage: LanguageList;
  backto: LanguageList;
  main?: LanguageList;
}) {
  const getStyle = StyleSkeleton.style;

  return (
    <Box sx={{ pt: margin.s, pb: margin.s, borderBottom: '1px solid #999' }}>
      <Typography
        variant='h5'
        sx={{ fontWeight: '700', pb: 1, color: getStyle.textTitle }}
      >
        {T(currentPage)}
      </Typography>
      <Breadcrumbs aria-label='breadcrumb'>
        {main ? (
          <Link
            underline='hover'
            color={getStyle.breadCrumbsText}
            href={mainLink}
          >
            {T(main)}
          </Link>
        ) : null}
        <Link
          underline='hover'
          color={getStyle.breadCrumbsText}
          href={backToLink}
        >
          {T(backto)}
        </Link>
        <Typography color={getStyle.textTitle}>{T(currentPage)}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
