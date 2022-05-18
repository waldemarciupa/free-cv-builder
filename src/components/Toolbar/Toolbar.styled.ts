import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  background: #303031;
  padding: 12px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 14px;
  font-size: 14px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;

const DownloadLink = styled(PDFDownloadLink)`
  font-size: 14px;
  text-decoration: none;
  line-height: 14px;
  background-color: #303031;
  color: #fff;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #fff;
`;

export default { Container, Logo, Link, DownloadLink };
