import { themeConfig } from '../../core/theme/theme';

export const taskManagementStyles = {
  pageWrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    padding: '40px',
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
  title: {
    margin: '0 0 40px 0',
    textAlign: 'center' as const,
    color: themeConfig.token.colorPrimary,
    fontSize: '32px',
    fontWeight: 600,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '30px',
  },
  detailTitle: {
    marginBottom: '12px',
  },
  detailTagWrapper: {
    marginBottom: '20px',
  },
  detailSubtitle: {
    marginBottom: '8px',
  },
  detailBackButton: {
    marginTop: '20px',
    textAlign: 'center' as const,
  },
};